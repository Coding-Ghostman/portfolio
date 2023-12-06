/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { Urbanist } from "next/font/google";
const urban = Urbanist({ subsets: ["latin"], weight: "variable" });

export default function Profile() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="relative flex overflow-hidden">
      <div
        ref={slider}
        className={`${urban.className} clamp-text relative whitespace-nowrap font-[800] `}
      >
        <p ref={firstText} className="relative m-0 pr-[50px]  text-[#fefeaa]">
          Frontend Dev - ML Engineer -
        </p>
        <p
          ref={secondText}
          className="absolute left-full top-0 m-0 pr-[50px] text-[#fefeaa]"
        >
          Frontend Dev - ML Engineer -
        </p>
      </div>
    </div>
  );
}
