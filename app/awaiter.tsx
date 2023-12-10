import { ReactNode } from "react";

/**
 * Artificial increasing the page loading time.
 * To allow users to fully see the loading animation each time.  
 */
export default async function Awaiter({ children }: { children: ReactNode }) {
  const wait = (t: number) => new Promise((res) => setTimeout(() => res(1), t));
  await wait(220);
  return <>{children}</>;
}
