"use client";
import { descSlideUp } from "@/components/anim/anim";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const cabinet = localFont({
  src: "../../../public/CabinetGrotesk-Variable.ttf",
  weight: "variable",
});

export default function Desc() {
  const desc =
    "I am a passionate web developer with a strong interest in the evolving field of Generative AI. I am fascinated by the potential of AI to revolutionize the way we interact with the digital world, and I am committed to using my skills to create innovative and adaptable web applications that incorporate AI capabilities.";

  const renderedDesc = desc.split(" ").map((word, index) => {
    return (
      <span key={index} className="inline-block items-center overflow-hidden">
        <motion.p
          variants={descSlideUp}
          initial="initial"
          animate="enter"
          custom={index}
          className={`text-[15.605px] text-[#e9e7e1] ${cabinet.className}`}
        >
          {word}
        </motion.p>
      </span>
    );
  });

  return (
    <div className="flex max-w-[500px] flex-wrap items-center gap-1">
      {renderedDesc}
    </div>
  );
}
