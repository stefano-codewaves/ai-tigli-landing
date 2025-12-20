export default function Footer() {
  return (
    <footer className="w-full h-20 sm:h-34 md:h-44 xl:h-80 1.5xl:h-96 relative flex items-end justify-center pt-14 pb-14 sm:py-5 md:!mt-20 xl:!-mt-20 -z-10">
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-34 md:h-44 xl:h-80 1.5xl:h-96 pointer-events-none hidden xl:block">
        <div
          className="absolute left-0 bottom-0 h-full w-1/2 aspect-square !bg-contain"
          style={{
            background: "url('/landings/sardagna/svg/long/decorations/footer-left.png') left bottom no-repeat",
          }}
        />
        <div
          className="absolute right-0 bottom-0 h-full w-1/2 aspect-square !bg-contain"
          style={{
            background: "url('/landings/sardagna/svg/long/decorations/footer-right.png') right bottom no-repeat",
          }}
        />
      </div>

      <div className="text-center text-black text-xs hidden lg:block">
        OTTIIMO S.R.L. - Via per Marco, 12/A – 38068 Rovereto (TN) - P. IVA: 02374890222 | Made by Hausbox
      </div>

      <div className="text-center text-black text-sm lg:hidden !leading-relaxed">
        OTTIIMO S.R.L. <br />
        Via per Marco, 12/A – 38068 Rovereto (TN) <br />
        P. IVA: 02374890222 | Made by Hausbox
      </div>
    </footer>
  )
}
