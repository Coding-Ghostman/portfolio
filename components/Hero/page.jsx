import Desc from "./Desc/page";
import Menu from "./Menu/page";
import Heading from "./sub/heading";
import SvgLoader from "./sub/svgLoader";

export default function Hero() {
  return (
    <div className="bg-[#ccc5b9 h-screen w-screen selection:bg-[#e9e7e1]  selection:text-[#121212]">
      <div className="absolute left-[10%] top-[40%] z-[10] flex justify-start">
        <Menu />
      </div>
      <div className="absolute right-[20%] top-[40%] z-[10] flex justify-end">
        <Desc />
      </div>
      <div className="absolute z-[10] flex h-[190px] w-full justify-center pt-[8%]">
        <Heading />
      </div>
      <SvgLoader />
    </div>
  );
}
