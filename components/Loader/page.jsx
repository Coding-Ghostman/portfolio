"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { opacity } from "../anim/anim";
import { Urbanist } from "next/font/google";
const urban = Urbanist({ subsets: ["latin"], weight: "variable" });

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Hello",
  "My",
  "Name",
  "Is",
];
export default function Loading() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 || index == 8 ? 1000 : index > 8 ? 300 : 150,
    );
  }, [index]);

  return (
    <div className="fixed z-[100] flex h-[96vh] w-screen items-center justify-center bg-transparent">
      <motion.p
        variants={opacity}
        initial="initial"
        exit="exit"
        animate="enter"
        className={`font-bold ${urban.className} text-[64px] text-[#fefaee]`}
      >
        <span></span>
        {words[index]}
      </motion.p>
    </div>
  );
}
