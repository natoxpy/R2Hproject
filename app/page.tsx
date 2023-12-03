"use client";
import Homepage from "./aboutme/page";
import Loading from "./loading";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/aboutme");
  return (
    <>
      <Homepage />
    </>
  );
}
