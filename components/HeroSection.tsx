import Image from "next/image";
import type { HeroData } from "@/types/property";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          background: `url('${data.backgroundImage}') center center no-repeat`,
          backgroundSize: "cover",
        }}
      />

      <header className="flex flex-col items-center w-full bg-linear-to-b from-white/0 via-black/40 via-45% to-black/40 min-h-screen overflow-hidden">
        <div className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto flex items-start lg:items-center">
          <div className="flex-grow">
            <Image
              alt="logo"
              src={data.logoImage}
              className="h-12 sm:h-16 lg:h-18 xl:h-19 mt-9 sm:mt-12 md:mt-14 lg:mt-0 w-auto"
            />
          </div>
          <a href="#contact-form" className="flex-shrink-0 relative">
            <div className="absolute w-full h-full flex items-center justify-center">
              <span className="text-white text-4.5xl sm:text-6xl font-bold !leading-none pb-1.5">
                {data.availableUnits}
              </span>
            </div>
            <Image
              alt="badge"
              src={data.badgeImage}
              className="h-30 sm:h-40 md:h-46 w-auto"
            />
          </a>
        </div>

        <div className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto mt-14 sm:mt-24 lg:mt-28 xl:mt-20 1.5xl:mt-36 mb-40 sm:mb-46 xl:mb-96">
          <h1 className="text-white text-5.5xl sm:text-7xl xl:text-9xl 1.5xl:text-9.25xl max-w-[12.5ch] font-semibold !leading-none mb-12 sm:mb-16 text-center xl:text-left mx-auto xl:ml-0 text-balance">
            {data.headline}
          </h1>
          <div className="w-full text-center xl:text-left">
            <a
              href="#timeline"
              className="border border-white/50 inline-flex py-6.5 px-20 xl:hover:bg-secondary transition-all rounded-full"
            >
              <span className="font-semibold text-base xl:text-lg text-white !leading-none">
                {data.ctaText}
              </span>
            </a>
          </div>
        </div>

        {data.decorations.topLeft !== "" &&
          data.decorations.topRight !== "" && (
            <div className="absolute -bottom-[1px] left-0 w-full h-30 sm:h-44 md:h-58 xl:h-96 pointer-events-none">
              <div
                className="absolute -left-[1px] -bottom-[1px] h-full w-1/2 aspect-square !bg-contain"
                style={{
                  background: `url('${data.decorations.topRight}') left bottom no-repeat`,
                }}
              />
              <div
                className="absolute -right-[1px] -bottom-[1px] h-full w-1/2 aspect-square !bg-contain"
                style={{
                  background: `url('${data.decorations.topLeft}') right bottom no-repeat`,
                }}
              />
            </div>
          )}
      </header>
    </div>
  );
}
