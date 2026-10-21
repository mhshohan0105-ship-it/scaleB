// Uploads the static export in ./out to public_html on the cPanel host over FTPS.
// Credentials come from .env (never committed). Run with: npm run deploy
// Only uploads and overwrites; it never deletes anything on the server, so cgi-bin and php.ini stay untouched.
import { existsSync } from "node:fs";
import { Client } from "basic-ftp";

const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_PORT = "21", FTP_REMOTE_DIR = "public_html", FTP_SECURE = "true" } = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error("Missing FTP_HOST, FTP_USER or FTP_PASSWORD. Copy .env.example to .env and fill it in.");
  process.exit(1);
}
if (!existsSync("out/index.html")) {
  console.error("No build found in ./out. Run `npm run build` first.");
  process.exit(1);
}

const client = new Client(60_000);
try {
  await client.access({
    host: FTP_HOST,
    port: Number(FTP_PORT),
    user: FTP_USER,
    password: FTP_PASSWORD,
    // Explicit TLS keeps the password encrypted; set FTP_SECURE=false only if the host has no FTPS.
    secure: FTP_SECURE !== "false",
  });
  console.log(`Connected to ${FTP_HOST}. Uploading ./out to ${FTP_REMOTE_DIR} ...`);
  client.trackProgress((info) => {
    if (info.type === "upload") process.stdout.write(`\r  ${info.name}`.padEnd(80));
  });
  await client.ensureDir(FTP_REMOTE_DIR);
  await client.uploadFromDir("out");
  client.trackProgress();
  console.log("\nDone. Open https://scalebbd.com and hard refresh (Ctrl+F5).");
} catch (error) {
  console.error("\nDeploy failed:", error.message);
  process.exitCode = 1;
} finally {
  client.close();
}
