/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { forwardRef } from "react"; // Import forwardRef
import { Urbanist } from "next/font/google";
const urban = Urbanist({ subsets: ["latin"], weight: "variable" });

// Use forwardRef to forward the ref to the inner div
const About = forwardRef(({}, ref) => {
  return (
    <div ref={ref} className="h-[50vh]">
      <div className="absolute flex text-[240px] text-[#e9e7e1]">ABOUT</div>
    </div>
  );
});
About.displayName = "About";
export default About;
