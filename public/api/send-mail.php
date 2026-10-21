<?php
// Receives the contact and estimator forms from scalebbd.com and emails them to the ScaleB inbox.
// Runs on the cPanel host with PHP's mail(); the static Next.js site posts here with fetch().

// The inbox that receives every enquiry. Create this mailbox in cPanel > Email Accounts.
const TO_EMAIL = 'info@scalebbd.com';
const SITE_NAME = 'ScaleB Website';
const MAX_PER_HOUR = 5;

// The server clock runs on UTC; show times in the email as Dhaka time.
date_default_timezone_set('Asia/Dhaka');

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function field(string $key, int $max = 500): string {
    $value = trim((string) ($_POST[$key] ?? ''));
    return mb_substr($value, 0, $max);
}

// Strips line breaks so a value can never add extra mail headers.
function oneLine(string $value): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Only accept posts sent from the site itself.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('#^https://(www\.)?scalebbd\.com$#', $origin)) {
    reply(403, ['ok' => false, 'error' => 'Forbidden']);
}

// Spam checks: a hidden field people never fill, and forms sent faster than a human could type.
if (field('website') !== '') {
    reply(200, ['ok' => true]);
}
$startedMs = (int) field('started', 20);
if ($startedMs > 0 && (microtime(true) * 1000 - $startedMs) < 3000) {
    reply(200, ['ok' => true]);
}

// Simple per visitor limit, stored in the server temp folder.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/scaleb-mail-' . md5($ip);
$recent = [];
if (is_file($rateFile)) {
    $recent = array_filter(array_map('intval', explode(',', (string) file_get_contents($rateFile))), fn ($t) => $t > time() - 3600);
}
if (count($recent) >= MAX_PER_HOUR) {
    reply(429, ['ok' => false, 'error' => 'Too many messages. Please try again later or call us.']);
}

$form = field('form', 20) === 'estimate' ? 'estimate' : 'contact';
$name = oneLine(field('name', 120));
$email = oneLine(field('email', 160));
$phone = oneLine(field('phone', 40));
$service = oneLine(field('service', 120));
$message = field('message', 5000);
$details = field('details', 2000);

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    reply(422, ['ok' => false, 'error' => 'Please enter your name and a valid email.']);
}
if ($form === 'contact' && $message === '') {
    reply(422, ['ok' => false, 'error' => 'Please tell us a little about your project.']);
}

$subject = $form === 'estimate'
    ? "New estimate request from {$name}"
    : "New enquiry from {$name}" . ($service !== '' ? " ({$service})" : '');

$lines = [
    $form === 'estimate' ? 'Project cost estimator request' : 'Contact form message',
    str_repeat('-', 40),
    "Name:    {$name}",
    "Email:   {$email}",
];
if ($phone !== '') $lines[] = "Phone:   {$phone}";
if ($service !== '') $lines[] = "Service: {$service}";
if ($details !== '') { $lines[] = ''; $lines[] = $details; }
if ($message !== '') { $lines[] = ''; $lines[] = 'Message:'; $lines[] = $message; }
$lines[] = '';
$lines[] = str_repeat('-', 40);
$lines[] = 'Sent from scalebbd.com on ' . date('d M Y, H:i') . " (IP {$ip})";
$lines[] = 'Reply to this email to answer the visitor directly.';

$headers = [
    'From: ' . SITE_NAME . ' <' . TO_EMAIL . '>',
    "Reply-To: {$name} <{$email}>",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: ScaleB',
];

$sent = mail(
    TO_EMAIL,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    implode("\r\n", $lines),
    implode("\r\n", $headers),
    '-f' . TO_EMAIL
);

if (!$sent) {
    reply(500, ['ok' => false, 'error' => 'We could not send your message. Please email ' . TO_EMAIL . ' or call us.']);
}

$recent[] = time();
@file_put_contents($rateFile, implode(',', $recent));
reply(200, ['ok' => true]);
