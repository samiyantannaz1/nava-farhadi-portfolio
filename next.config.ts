// import type { NextConfig } from "next";

// const isProduction = process.env.NODE_ENV === "production";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   output: "export",

//   ...(isProduction && {
//     basePath: "/nava-farhadi-portfolio",
//   }),

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
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
