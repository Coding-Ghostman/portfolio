"use client";
import Hero from "@/components/Hero/page";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Loading from "@/components/Loader/page";
import { mainAnim } from "@/components/anim/anim";
import About from "@/components/About/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const isInview = useInView(containerRef);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 4000);
  }, []);

  return (
    <motion.main
      variants={mainAnim}
      initial="initial"
      animate={isInview ? "open" : "closed"}
      className="bg-[#ccc5b9]"
    >
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>
      <Hero />
      <About ref={containerRef} />
    </motion.main>
  );
}
