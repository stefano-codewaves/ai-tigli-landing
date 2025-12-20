import Image from "next/image";
import gallery1Image from "@/public/landings/sardagna/gallery/1.png";
import gallery2Image from "@/public/landings/sardagna/gallery/2.png";

export default function GallerySection() {
  return (
    <section className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto !mt-16 sm:!mt-30 xl:!mt-0">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start">
        <div className="relative flex-shrink-0 ml-6 sm:p-0">
          <div className="absolute -left-6 sm:-left-12 w-full h-full -bottom-6 sm:-bottom-12 bg-sardagna-primary/20 -z-10" />
          <div className="relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background:
                  "url(/landings/sardagna/gallery/1.png) center center no-repeat",
                backgroundSize: "cover",
              }}
            />
            <Image
              alt="gallery"
              src={gallery1Image}
              className="w-full h-auto opacity-0"
            />
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-y-10 h-full mt-24 sm:mt-30 xl:mt-0">
          <div className="sm:pl-42 w-full mb-30 sm:mb-40 xl:mb-36">
            <p className="text-black text-lg mb-12 max-w-[32ch] !leading-relaxed">
              24 unità abitative a soli 500 metri dalla funivia di Sardagna.
              Ideali per chi desidera un po&apos; di tranquillità a pochi minuti
              da Trento, senza rinunciare al massimo comfort di una soluzione
              nuova e dotata delle migliori tecnologie per l&apos;abitare.
            </p>
            <a
              href="#contact-form"
              className="border border-gray-300 inline-flex py-6.5 px-20 xl:hover:bg-black/5 transition-all"
            >
              <span className="font-semibold text-base xl:text-lg text-black !leading-none">
                Richiedi informazioni
              </span>
            </a>
          </div>
          <div className="relative flex-shrink-0 flex justify-end">
            <div className="relative pr-6 sm:pr-12">
              <div className="absolute right-0 w-[38%] h-[calc(100%+4rem)] sm:h-[calc(100%+8rem)] bottom-0 bg-sardagna-primary/20 -z-10" />
              <div className="relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background:
                      "url(/landings/sardagna/gallery/2.png) center center no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <Image
                  alt="gallery"
                  src={gallery2Image}
                  className="w-full xl:w-[40.5rem] 2.5xl:w-[47.5rem] h-auto mb-6 sm:mb-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
