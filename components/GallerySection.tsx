import Image from "next/image";
import type { GalleryData } from "@/types/property";

interface GallerySectionProps {
  data: GalleryData;
}

export default function GallerySection({ data }: GallerySectionProps) {
  return (
    <section className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto !mt-16 sm:!mt-30 xl:!mt-0">
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start">
        <div className="relative flex-shrink-0 ml-6 sm:p-0">
          <div className="absolute -left-6 sm:-left-12 w-full h-full -bottom-6 sm:-bottom-12 bg-primary/20 -z-10" />
          <div className="relative overflow-hidden">
            <Image
              alt="gallery"
              src={data.images[0]}
              className="w-full h-auto object-cover max-w-[260px]"
            />
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-y-10 h-full mt-24 sm:mt-30 xl:mt-0">
          <div className="sm:pl-42 w-full mb-30 sm:mb-40 xl:mb-36">
            <p className="text-black text-lg mb-12 max-w-[32ch] !leading-relaxed">
              {data.description}
            </p>
            <a
              href="#contact-form"
              className="group border border-gray-300 inline-flex py-6.5 px-20 xl:hover:bg-secondary transition-all rounded-full"
            >
              <span className="font-semibold text-base xl:text-lg text-black !leading-none group-hover:text-white transition-all">
                {data.ctaText}
              </span>
            </a>
          </div>
          <div className="relative flex-shrink-0 flex justify-end">
            <div className="relative pr-6 sm:pr-12">
              <div className="absolute right-0 w-[38%] h-[calc(100%+4rem)] sm:h-[calc(100%+8rem)] bottom-0 bg-primary/20 -z-10" />
              <div className="relative overflow-hidden">
                <Image
                  alt="gallery"
                  src={data.images[1]}
                  className="w-full xl:w-[40.5rem] 2.5xl:w-[47.5rem] h-auto mb-6 sm:mb-12 object-cover max-w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
