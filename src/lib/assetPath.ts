export function assetPath(path: string): string {
  const basePath =
    process.env.GITHUB_ACTIONS === "true"
      ? "/nava-farhadi-portfolio"
      : "";

  return `${basePath}${path}`;
}
