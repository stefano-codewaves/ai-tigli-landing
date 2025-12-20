export default function StatisticsSection() {
  return (
    <section className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto !mt-20 sm:!mt-30 xl:pt-20 lg:pb-0">
      <div className="w-full flex flex-col xl:flex-row justify-start xl:gap-x-40">
        <div className="flex flex-col gap-y-4">
          <span className="text-gray-500 italic text-lg xl:text-xl !leading-none">
            Struttura
          </span>
          <h3 className="text-sardagna-primary text-4.5xl sm:text-6xl xl:text-7xl font-bold mb-15 xl:mb-0 xl:mt-3">
            2 palazzine
          </h3>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-gray-500 italic text-lg xl:text-xl !leading-none">
            Totale unità
          </span>
          <h3 className="text-sardagna-primary text-4.5xl sm:text-6xl xl:text-7xl font-bold mb-15 xl:mb-0 xl:mt-3">
            24 appartamenti
          </h3>
        </div>
      </div>
    </section>
  )
}
