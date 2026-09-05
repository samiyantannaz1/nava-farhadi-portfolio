export function assetPath(path: string): string {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/nava-farhadi-portfolio"
      : "";

  return `${basePath}${path}`;
}
