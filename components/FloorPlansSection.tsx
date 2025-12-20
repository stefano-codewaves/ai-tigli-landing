"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import plan2aImage from "@/public/landings/sardagna/planimetrie/2a.png";
import plan4Image from "@/public/landings/sardagna/planimetrie/4.png";
import plan9Image from "@/public/landings/sardagna/planimetrie/9.png";
import plan12Image from "@/public/landings/sardagna/planimetrie/12.png";

export default function FloorPlansSection() {
  const [currentTab, setCurrentTab] = useState(0);

  const floorPlans = [
    {
      title: "Una stanza",
      image: plan2aImage,
      pdf: "/landings/sardagna/planimetrie/2a.pdf",
      size: "60 m2",
    },
    {
      title: "Due stanze",
      image: plan4Image,
      pdf: "/landings/sardagna/planimetrie/4.pdf",
      size: "101 m2",
    },
    {
      title: "Tre stanze",
      image: plan9Image,
      pdf: "/landings/sardagna/planimetrie/9.pdf",
      size: "117 m2",
    },
    {
      title: "Attico 3 stanze",
      image: plan12Image,
      pdf: "/landings/sardagna/planimetrie/12.pdf",
      size: "125 m2",
    },
  ];

  return (
    <section className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6.5xl mx-auto !mt-30 xl:!mt-50">
      <div className="px-[1.5rem] sm:px-0">
        <h2 className="text-sardagna-primary text-4xl sm:text-4.5xl font-semibold !leading-tight mb-6 text-center w-full">
          Le soluzioni disponibili
        </h2>
        <p className="text-black text-lg mb-16 max-w-[40ch] !leading-relaxed text-center mx-auto">
          Scegli tra le diverse opzioni ancora disponibili, in base alle tue
          esigenze di spazio.
        </p>
      </div>

      {/* Tab navigation with horizontal scroll on mobile */}
      <div className="w-full overflow-x-auto sm:overflow-visible mx-auto sm:max-w-full flex hide-scrollbar">
        <div className="w-full flex sm:justify-around sm:border-b-[2px] border-gray-300 peer mb-3 sm:mb-0 pl-[1.5rem] mr-[1.5rem] sm:p-0 sm:m-0 basis-[content] sm:basis-auto">
          {floorPlans.map((plan, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentTab(index)}
              className={cn(
                "whitespace-nowrap px-4 xl:px-8 py-2.5 group relative border-b-[2px] border-gray-300 sm:border-0",
                currentTab === index && "active"
              )}
            >
              <span className="text-black font-semibold text-lg sm:text-xl md:text-1.5xl xl:text-2xl !leading-relaxed group-[&.active]:!text-sardagna-primary">
                {plan.title}
              </span>
              <span className="absolute left-0 w-full h-[2px] -bottom-[2px] bg-sardagna-primary hidden group-[&.active]:!block">
                <span className="absolute w-3.5 h-3.5 aspect-square -bottom-[2px] rotate-45 bg-white border-r-[2px] border-b-[2px] border-sardagna-primary top-1/2 -translate-y-[calc(50%-1px)] left-1/2 -translate-x-1/2"></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Floor plan content sections */}
      {floorPlans.map((plan, index) => (
        <div
          key={index}
          className={cn(
            "w-full flex flex-col lg:flex-row items-center xl:px-5 lg:gap-x-14 xl:gap-x-30 px-[1.5rem] sm:px-0",
            currentTab !== index && "hidden"
          )}
        >
          <div className="pt-10 sm:pt-20 pb-12 md:py-20 lg:py-30 sm:px-8 lg:px-0 mb-[2px]">
            <Image
              alt={`planim ${index + 1}`}
              src={plan.image}
              className="w-full sm:max-w-[70%] mx-auto lg:ml-0 md:max-w-full"
            />
          </div>
          <div className="flex-shrink-0 flex flex-col justify-center lg:w-[18rem] xl:w-[22rem]">
            <span className="text-gray-500 italic text-lg xl:text-xl !leading-none text-center xl:text-left">
              A partire da
            </span>
            <h3 className="text-sardagna-primary text-6xl sm:text-6.5xl md:text-7xl xl:text-8xl font-bold mb-10 md:mb-15 mt-3 text-center xl:text-left">
              {plan.size}
            </h3>
            <div>
              <a
                href={plan.pdf}
                className="border border-gray-300 inline-flex py-6.5 px-20 xl:hover:bg-black/5 transition-all"
              >
                <span className="font-semibold text-base xl:text-lg text-black !leading-none">
                  Scarica planimetria
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
