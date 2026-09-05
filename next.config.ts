import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: "export",

  ...(isProduction && {
    basePath: "/nava-farhadi-portfolio",
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;