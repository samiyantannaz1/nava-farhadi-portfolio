import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  ...(isGitHubPages && {
    output: "export",
    basePath: "/nava-farhadi-portfolio",
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
