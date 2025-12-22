import Image from "next/image";
import type { MapData } from "@/types/property";

interface MapSectionProps {
  data: MapData;
}

export default function MapSection({ data }: MapSectionProps) {
  return (
    <section className="w-full flex max-h-screen h-[52rem] justify-center items-end relative !mt-30 md:!mt-40 lg:!mt-30 overflow-hidden parent-section">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent">
        <div
          className="absolute bottom-0 left-0 w-full h-[115vh] md:h-full -z-10"
          style={{
            background: `url('${data.backgroundImage}') center center no-repeat`,
            backgroundSize: "cover",
          }}
        />
        {/*  <div
          className="absolute right-0 -bottom-[1px] h-20 sm:h-30 md:h-40 lg:h-48 xl:h-64 w-1/2 aspect-square !bg-contain z-20"
          style={{
            background: `url('${data.decorationImage}') right bottom no-repeat`,
          }}
        /> */}
      </div>
      <a
        href="#contact-form"
        className="absolute top-1/2 -translate-y-[115%] md:-translate-y-[66%] left-1/2 -translate-x-1/2 w-30 h-30 xl:w-40 xl:h-40 cursor-pointer"
      >
        <Image
          alt="icona"
          src={data.pointerImage}
          className="w-full h-full aspect-square relative"
        />
      </a>
      <div className="relative w-full flex flex-col max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto mb-20">
        <h2 className="text-white text-4xl sm:text-4.5xl font-semibold max-w-[17ch] !leading-tight mb-8 sm:mb-12">
          {data.headline}
        </h2>
        <div>
          <a
            href="#contact-form"
            className="group border border-white/50 inline-flex py-6.5 px-20 xl:hover:bg-secondary transition-all rounded-full"
          >
            <span className="font-semibold text-base xl:text-lg text-white !leading-none group-hover:text-white transition-all rounded-full group-hover:bg-secondary">
              {data.ctaText}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
