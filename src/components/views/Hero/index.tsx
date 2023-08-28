import { heroGirlimg } from "@/components/assets";
import { Featured1 } from "@/components/assets";
import { Featured2 } from "@/components/assets";
import { Featured3 } from "@/components/assets";
import { Featured4 } from "@/components/assets";
import { CgShoppingCart } from "react-icons/Cg";
import Image from "next/image";

const Hero = () => {
  const btnText = "Start Shopping";

  return (
    <div className="py-5 flex justify-between items-center px-2">
      {/* right side */}
      <div className="space-y-6 max-w-lg">
        <button
          aria-label="redirect the user to sale page"
          className="rounded-md bg-btnBg text-blue-700 font-medium px-4 py-2">
          Sale 70%
        </button>
        <h1 className="text-4xl md:text-5xl text-btnGray-800 font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-gray-700">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="redirect the user to sale page"
          className="flex gap-3 items-center border-gray-500 text-lg ring-1 ring-slate-800 bg-btnGray text-white font-semibold py-4 px-4"
        >
          <CgShoppingCart size={24} />
          <p className="whitespace-pre">{btnText}</p>
        </button>
        <div className="flex gap-6 lg:pt-20 pt-10 flex-wrap lg:flex-nowrap">
          <div className="sm:w-14 md:w-28">
            <Image width={100} height={100} src={Featured1} alt="bazaar" />
          </div>
          <div className="sm:w-14 md:w-28">
            <Image width={100} height={100} src={Featured2} alt="baztel" />
          </div>
          <div className="sm:w-14 md:w-28">
            <Image width={100} height={100} src={Featured3} alt="versase" />
          </div>
          <div className="sm:w-14 md:w-28">
            <Image width={100} height={100} src={Featured4} alt="in style" />
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="hidden md:flex bg-primaryWhite rounded-full">
        <Image className="mt-10" src={heroGirlimg} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
