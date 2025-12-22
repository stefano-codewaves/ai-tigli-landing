import type { FooterData } from "@/types/property";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full h-20 sm:h-34 md:h-44 xl:h-80 1.5xl:h-96 relative flex items-end justify-center pt-14 pb-14 sm:py-5 md:!mt-20 xl:!-mt-20 -z-10">
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-34 md:h-44 xl:h-80 1.5xl:h-96 pointer-events-none hidden xl:block">
        <div
          className="absolute left-0 bottom-0 h-full w-1/2 aspect-square !bg-contain"
          style={{
            background: `url('${data.decorations.left}') left bottom no-repeat`,
          }}
        />
        <div
          className="absolute right-0 bottom-0 h-full w-1/2 aspect-square !bg-contain"
          style={{
            background: `url('${data.decorations.right}') right bottom no-repeat`,
          }}
        />
      </div>

      <div className="text-center text-black text-xs hidden lg:block">
        {data.companyName} - {data.address} - P. IVA: {data.vatNumber}
      </div>

      <div className="text-center text-black text-sm lg:hidden !leading-relaxed">
        {data.companyName} <br />
        {data.address} <br />
        P. IVA: {data.vatNumber}
      </div>
    </footer>
  );
}
