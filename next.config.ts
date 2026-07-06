import type { NextConfig } from "next";

// On GitHub Pages the site lives under /chevere-app — the deploy workflow
// sets NEXT_PUBLIC_BASE_PATH there. Locally it's empty, so dev/build work
// at the root as usual.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static site → ./out (what GitHub Pages serves)
  basePath,
  trailingSlash: true, // /about/ → about/index.html, reliable on static hosts
};

export default nextConfig;
