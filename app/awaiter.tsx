import { ReactNode } from "react";

export default async function Awaiter({ children }: { children: ReactNode }) {
  const wait = (t: number) => new Promise((res) => setTimeout(() => res(1), t));
  await wait(220);
  return <>{children}</>;
}
