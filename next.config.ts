import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repoName.endsWith(".github.io");
const basePath =
  isGithubActions && repoName && !isUserOrOrgPage ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
