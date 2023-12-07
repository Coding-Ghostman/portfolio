"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SvgLoader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath =
    "M24 0h352s24 0 24 24v152s0 24 -24 24h-352s-24 0 -24 -24v-152s0 -24 24 -24";
  const targetPath = `M-0 -${dimension.height / 2 - 150}h${
    dimension.width / 2 + 140
  }s24 0 24 24v${dimension.height - 110}s0 24 -24 24h-${
    dimension.width - 120
  }s-24 0 -24 -24v-${dimension.height - 110}s0 -24 24 -24`;

  const box = {
    initial: {
      x: dimension.width / 2 - 200,
      y: dimension.height / 2 - 120,
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    enter: {
      x: dimension.width / 2 - 200,
      y: dimension.height / 2 - 120,
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 4 },
    },
  };
  return (
    <div className="">
      {dimension.width > 0 && (
        <>
          <svg
            className=""
            viewBox={`0 0 ${dimension.width} ${dimension.height}`}
          >
            <defs>
              <clipPath id="maskBox">
                <motion.path
                  variants={box}
                  initial="initial"
                  animate="enter"
                  fill="#121212"
                  d={initialPath}
                />
              </clipPath>
            </defs>
          </svg>
        </>
      )}
    </div>
  );
}
