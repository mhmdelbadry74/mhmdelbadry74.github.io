import type { NextConfig } from "next";

function resolveBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/$/, "");
  }

  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) return "";

  const [owner, name] = repo.split("/");
  if (!owner || !name) return "";
  if (name.toLowerCase() === `${owner.toLowerCase()}.github.io`) return "";
  return `/${name}`;
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  devIndicators: false,
};

export default nextConfig;
