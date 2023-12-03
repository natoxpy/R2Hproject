import { RedirectType, redirect } from "next/navigation";
import Aboutme from "./aboutme/_page";

export default async function Home() {
  return <Aboutme></Aboutme>;
}
