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

  const box_filter = {
    initial: {
      x: 20,
      y: 20,
      d: initialPath,
    },
    enter: {
      x: 20,
      y: 20,
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 1 },
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
              <filter
                id="a"
                x="0%"
                y="0%"
                width="300%"
                height="280%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="linearRGB"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency=".154"
                  numOctaves="6"
                  seed="17"
                  stitchTiles="stitch"
                  x="0%"
                  y="0%"
                  width="200%"
                  height="200%"
                  result="turbulence"
                />
                <feSpecularLighting
                  surfaceScale="11"
                  specularConstant=".3"
                  specularExponent="20"
                  lightingColor="#c6c4c8"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="turbulence"
                  result="specularLighting"
                >
                  <feDistantLight azimuth="3" elevation="80" />
                </feSpecularLighting>
              </filter>
            </defs>
            <motion.path
              variants={box}
              initial="initial"
              animate="enter"
              fill="#121212"
              d={initialPath}
            />
            <motion.path
              variants={box_filter}
              initial="initial"
              animate="enter"
              filter="url(#a)"
              fill="#121212"
              d={initialPath}
            />
          </svg>
        </>
      )}
    </div>
  );
}
