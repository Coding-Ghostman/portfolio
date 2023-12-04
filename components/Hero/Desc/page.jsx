"use client";
import { descSlideUp } from "@/components/anim/anim";
import { motion } from "framer-motion";

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
          className="px-1 text-[#e9e7e1]"
        >
          {word}
        </motion.p>
      </span>
    );
  });

  return (
    <div className="flex max-w-[600px] flex-wrap items-center">
      {renderedDesc}
    </div>
  );
}
