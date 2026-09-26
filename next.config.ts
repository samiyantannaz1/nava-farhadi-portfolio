import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages
      ? "/nava-farhadi-portfolio"
      : "",
  },

  output: "export",

  ...(isGitHubPages && {
    basePath: "/nava-farhadi-portfolio",
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;