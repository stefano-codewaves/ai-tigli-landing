import Image from "next/image";
import type { BenefitsData } from "@/types/property";

interface BenefitsSectionProps {
  data: BenefitsData;
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto !mt-30 sm:!mt-38 lg:!mt-20">
      <h2 className="text-primary text-4xl sm:text-4.5xl font-semibold !leading-tight mb-12 sm:mb-12 xl:mb-16 w-full text-left">
        {data.title}
      </h2>
      <div className="w-full xl:grid grid-cols-3 gap-x-20">
        {data.items.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col gap-y-0 col-span-1 ${
              index === 1 ? "my-16 lg:my-20 xl:my-0" : ""
            }`}
          >
            <Image
              alt="icon"
              src={benefit.icon}
              className="h-24 sm:h-24 w-24 sm:w-24 xl:w-22 xl:h-22 aspect-square"
            />
            <h4 className="mt-8 sm:mt-10 mb-4 xl:mb-5 text-black font-semibold text-1.5xl xl:text-2xl text-left !leading-tight">
              {benefit.title}
            </h4>
            <p className="text-black text-lg xl:text-lg !leading-relaxed w-full xl:max-w-[90%]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
