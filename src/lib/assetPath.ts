// export function assetPath(path: string): string {
//   const basePath =
//     process.env.GITHUB_ACTIONS === "true"
//       ? "/nava-farhadi-portfolio"
//       : "";

//   return `${basePath}${path}`;
// }
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}