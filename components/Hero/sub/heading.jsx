"use client";
import { motion } from "framer-motion";
import { slideUp } from "@/components/anim/anim";
import { Urbanist } from "next/font/google";
const urban = Urbanist({ subsets: ["latin"], weight: "variable" });

export default function Heading() {
  const Name = "Atman Mishra";
  const renderedName = Name.split("").map((char, index) => {
    return (
      <motion.span
        variants={slideUp}
        initial="initial"
        animate="enter"
        custom={index}
        key={index}
        className={`text-[#E9E7E1] ${
          char === " " ? "px-[1%]" : ""
        }  clamp-text text-smooth ${urban.className}`}
      >
        {char}
      </motion.span>
    );
  });
  return (
    <div className="absolute inline-flex h-[190px] w-full items-center justify-center overflow-hidden ">
      {renderedName}
    </div>
  );
}
