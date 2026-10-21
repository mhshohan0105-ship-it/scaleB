// Posts a form to the PHP mailer on the cPanel host (public/api/send-mail.php).
// It only runs on the live site; `next dev` serves the PHP file as plain text, so sends fail locally.
export async function sendForm(fields: Record<string, string>) {
  const body = new FormData();
  Object.entries(fields).forEach(([key, value]) => body.append(key, value));

  let result: { ok?: boolean; error?: string } = {};
  try {
    const response = await fetch("/api/send-mail.php", { method: "POST", body });
    result = await response.json();
  } catch {
    throw new Error("We could not send your message. Please email info@scalebbd.com or call +8801314-779988.");
  }
  if (!result.ok) throw new Error(result.error || "Something went wrong. Please try again.");
}
