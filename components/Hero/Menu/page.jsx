"use client";
import { motion } from "framer-motion";
import { menuSlide } from "@/components/anim/anim";
import localFont from "next/font/local";

const cabinet = localFont({
  src: "../../../public/CabinetGrotesk-Variable.ttf",
  weight: "variable",
});

export default function Menu() {
  const list = [
    { label: "About", route: "/about" },
    { label: "Projects", route: "/project" },
    { label: "Contact", route: "/contact" },
  ];

  const renderedList = list.map((item, index) => {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        whileHover="hovering"
        custom={index}
        variants={menuSlide}
        className={`svg-hover flex cursor-pointer items-center gap-2 text-[15.605px] text-[#e9e7e1] ${cabinet.className}`}
        key={index}
      >
        <span>
          <svg width="10" height="10">
            <path fill="#e9e7e1" d="M1 5a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          </svg>
        </span>
        {item.label}
      </motion.div>
    );
  });
  return <div className="container overflow-hidden">{renderedList}</div>;
}
