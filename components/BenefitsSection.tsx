import Image from "next/image";
import icon1Image from "@/public/landings/sardagna/svg/ico-1-short.svg";
import icon2Image from "@/public/landings/sardagna/svg/ico-2-short.svg";
import icon3Image from "@/public/landings/sardagna/svg/ico-3-short.svg";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: icon1Image,
      title: "Soluzioni in classe A+",
      description:
        "Con pompe di calore, pannelli fotovoltaici e ricambio dell'aria automatizzato.",
    },
    {
      icon: icon2Image,
      title: "Impianto geotermico",
      description:
        "Per riscaldare l'inverno e raffrescare in estate con il massimo risparmio energetico.",
    },
    {
      icon: icon3Image,
      title: "Fantastica esposizione",
      description:
        "In una zona strategica e splendidamente presa dal sole nel paese di Sardagna.",
    },
  ];

  return (
    <section className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto !mt-30 sm:!mt-38 lg:!mt-20">
      <h2 className="text-sardagna-primary text-4xl sm:text-4.5xl font-semibold !leading-tight mb-12 sm:mb-12 xl:mb-16 w-full text-left">
        Benefits
      </h2>
      <div className="w-full xl:grid grid-cols-3 gap-x-20">
        {benefits.map((benefit, index) => (
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
