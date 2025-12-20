import Image from "next/image";
import symbolImage from "@/public/landings/sardagna/svg/long/symbol.svg";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto"
    >
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start mt-30 sm:mt-40 xl:mt-50 mb-30 sm:mb-40">
        <div className="flex flex-col xl:flex-row items-center flex-shrink-0 pb-24">
          <div className="">
            <Image
              alt="icona"
              src={symbolImage}
              className="w-64 sm:w-96 xl:w-[27rem] h-auto opacity-10 relative -top-7"
            />
          </div>
          <div className="relative flex-shrink-0 -mt-20 sm:-mt-26 xl:mt-0 xl:-ml-24">
            <h2 className="text-sardagna-primary text-3.5xl sm:text-4.5xl font-semibold max-w-[22ch] !leading-tight text-center xl:text-left">
              Un progetto immobiliare curato in ogni dettaglio e firmato{" "}
              <span className="underline">Pisetta Costruzioni</span>,
              un&apos;impresa con oltre 50 anni di storia.
            </h2>
          </div>
        </div>
        <div className="relative h-full flex justify-end flex-grow">
          <div className="w-auto h-56 flex flex-col justify-between relative">
            <div className="absolute w-[1px] h-full border-l border-gray-300 top-10 left-5" />
            <div className="w-full flex gap-x-5 items-end relative">
              <div className="absolute w-[1px] h-16 border-l border-dashed border-gray-300 bottom-10 left-5" />
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white">
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
              </div>
              <div>
                <span className="text-gray-400 text-xl !leading-none">
                  Inizio lavori
                </span>
                <h4 className="text-black font-semibold text-2xl !leading-relaxed">
                  Primavera 2023
                </h4>
              </div>
            </div>
            <div className="w-full flex gap-x-5 items-end relative">
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white">
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
              </div>
              <div>
                <span className="text-gray-400 text-xl !leading-none">
                  Fine lavori
                </span>
                <h4 className="text-black font-semibold text-2xl !leading-relaxed">
                  Autunno 2024
                </h4>
              </div>
              <div className="absolute w-[1px] h-24 lg:h-32 border-l border-gray-300 top-10 left-5 -z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
