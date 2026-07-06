// Base path the site is served under ("" locally, "/chevere-app" on GitHub
// Pages). next/link and CSS handle this automatically; plain <img src> and
// background-image URLs don't — so route those through asset().
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
