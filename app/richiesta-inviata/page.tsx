import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richiesta inviata - Residenza Ai Tigli",
  description: "Grazie per averci contattato",
};

export default function RichiestaInviataPage() {
  return (
    <section className="w-full py-16 lg:py-5 xl:py-20 1.5xl:py-28 2.5xl:py-32 min-h-screen xl:flex transition-all">
      <div className="w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto text-white relative">
        <div className="flex flex-col w-full">
          <h1 className="text-black text-4xl sm:text-4.5xl md:text-5xl xl:text-6xl text-center lg:max-w-[35ch] mx-auto font-semibold tracking-[0.15rem] !leading-[1.05] mb-4">
            Richiesta inviata
          </h1>

          <p className="text-lg tracking-[0.07rem] text-black mx-auto max-w-[55ch] text-center mb-10 font-normal pt-3">
            Grazie per averci contattato, ti risponderemo al più presto!
          </p>
        </div>
      </div>
    </section>
  );
}
