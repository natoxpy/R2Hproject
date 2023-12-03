"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Awaiter from "./awaiter";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      initial={{
        x: 250,
        opacity: 0,
      }}
    >
      <Awaiter>{children}</Awaiter>
    </motion.div>
  );
}
