import Image from "next/image";
import pointerImage from "@/public/landings/sardagna/svg/long/pointer.svg";

export default function MapSection() {
  return (
    <section className="w-full flex max-h-screen h-[52rem] justify-center items-end relative !mt-30 md:!mt-40 lg:!mt-30 overflow-hidden parent-section">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent">
        <div
          className="absolute bottom-0 left-0 w-full h-[115vh] md:h-full -z-10"
          style={{
            background:
              "url('/landings/sardagna/map.jpg') center center no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="absolute right-0 -bottom-[1px] h-20 sm:h-30 md:h-40 lg:h-48 xl:h-64 w-1/2 aspect-square !bg-contain z-20"
          style={{
            background:
              "url('/landings/sardagna/svg/long/decorations/map.png') right bottom no-repeat",
          }}
        />
      </div>
      <a
        href="#contact-form"
        className="absolute top-1/2 -translate-y-[115%] md:-translate-y-[66%] left-1/2 -translate-x-1/2 w-30 h-30 xl:w-40 xl:h-40 cursor-pointer"
      >
        <Image
          alt="icona"
          src={pointerImage}
          className="w-full h-full aspect-square"
        />
      </a>
      <div className="relative w-full flex flex-col max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto mb-20">
        <h2 className="text-white text-4xl sm:text-4.5xl font-semibold max-w-[17ch] !leading-tight mb-8 sm:mb-12">
          Una posizione strategica a 5 minuti da Trento
        </h2>
        <div>
          <a
            href="#contact-form"
            className="border border-white/50 inline-flex py-6.5 px-20 xl:hover:bg-white/20 transition-all"
          >
            <span className="font-semibold text-base xl:text-lg text-white !leading-none">
              Richiedi informazioni
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
