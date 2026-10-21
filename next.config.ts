import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared cPanel hosting has no Node.js server, so the site is exported as plain static files into /out.
  output: "export",
  // Emits /about/index.html instead of /about.html, so LiteSpeed serves every page on refresh without rewrites.
  trailingSlash: true,
  // The default image optimizer needs a server; serve images as they are.
  images: { unoptimized: true },
};

export default nextConfig;
