import Image from "next/image";
import logoImage from "@/public/landings/sardagna/svg/long/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full relative bg-sardagna-secondary overflow-hidden">
      <div
        className="absolute -left-[1px] -bottom-[1px] h-30 sm:h-44 md:h-58 xl:h-80 w-1/2 aspect-square !bg-contain pointer-events-none"
        style={{
          background:
            "url('/landings/sardagna/svg/long/decorations/footer-left.png') left bottom no-repeat",
        }}
      />
      <div
        className="absolute -right-[1px] -bottom-[1px] h-30 sm:h-44 md:h-58 xl:h-80 w-1/2 aspect-square !bg-contain pointer-events-none"
        style={{
          background:
            "url('/landings/sardagna/svg/long/decorations/footer-right.png') right bottom no-repeat",
        }}
      />

      <div className="relative w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto py-20 sm:py-30 flex flex-col items-center">
        <Image
          src={logoImage}
          alt="Residenza Sardagna"
          className="h-16 sm:h-20 w-auto mb-12 sm:mb-16"
        />

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-white text-sm sm:text-base">
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
          >
            Privacy Policy
          </a>
          <a
            href="/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all"
          >
            Cookie Policy
          </a>
        </div>

        <p className="text-white/60 text-xs sm:text-sm text-center mt-12 sm:mt-16">
          © {new Date().getFullYear()} Residenza Sardagna - Tutti i diritti
          riservati
        </p>
      </div>
    </footer>
  );
}
