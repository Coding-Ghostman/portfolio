"use client";
import Hero from "@/components/Hero/page";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loader/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <main>
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>
      <Hero />
    </main>
  );
}
