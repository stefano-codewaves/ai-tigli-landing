"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fancybox } from "@fancyapps/ui";
import type { Swiper as SwiperType } from "swiper";
import gallery1 from "@/public/landings/sardagna/gallery/1.jpg";
import gallery2 from "@/public/landings/sardagna/gallery/2.jpg";
import gallery3 from "@/public/landings/sardagna/gallery/3.jpg";
import gallery4 from "@/public/landings/sardagna/gallery/4.jpg";
import gallery5 from "@/public/landings/sardagna/gallery/5.jpg";
import gallery6 from "@/public/landings/sardagna/gallery/6.jpg";
import gallery7 from "@/public/landings/sardagna/gallery/7.jpg";
import gallery8 from "@/public/landings/sardagna/gallery/8.jpg";
import gallery9 from "@/public/landings/sardagna/gallery/9.jpg";

import "swiper/css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function SwiperGallery() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [percent, setPercent] = useState(0);
  const [hidePrevBtn, setHidePrevBtn] = useState(true);
  const [hideNextBtn, setHideNextBtn] = useState(false);

  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
  ];

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Hash: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    const progress = swiper.progress * 100;
    setPercent(progress);
    setHidePrevBtn(swiper.isBeginning);
    setHideNextBtn(swiper.isEnd);
  };

  const prevSlide = () => {
    swiper?.slidePrev();
  };

  const nextSlide = () => {
    swiper?.slideNext();
  };

  return (
    <section className="w-full max-w-screen slider-section py-24 sm:py-40 bg-[#eef3ef] relative !mt-20 sm:!mt-30">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div
          className="absolute right-0 bottom-[calc(100%-1px)] h-48 sm:h-64 xl:h-96 w-1/2 !bg-contain hidden xl:block"
          style={{
            background:
              "url('/landings/sardagna/svg/long/decorations/gallery.png') right bottom no-repeat",
          }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        <div className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl mx-auto">
          {!hidePrevBtn && (
            <button
              onClick={prevSlide}
              type="button"
              className="w-16 h-16 hidden xl:flex justify-center items-center transition-all absolute top-1/2 -translate-y-1/2 left-18 z-20 xl:hover:opacity-80 pb-14 sm:pb-18"
            >
              <svg
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="75.443"
                height="75.443"
                viewBox="0 0 75.443 75.443"
              >
                <g transform="translate(-103.543 -5869.77)">
                  <circle
                    cx="37.222"
                    cy="37.222"
                    r="37.222"
                    transform="translate(104.043 5870.27)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <g>
                    <g>
                      <line
                        x2="28.574"
                        transform="translate(126.977 5907.491)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                      />
                    </g>
                    <path
                      d="M134.121,5914.635l-7.144-7.144,7.144-7.144"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                  </g>
                </g>
              </svg>
            </button>
          )}

          {!hideNextBtn && (
            <button
              onClick={nextSlide}
              type="button"
              className="w-16 h-16 hidden xl:flex justify-center items-center transition-all absolute top-1/2 -translate-y-1/2 right-18 z-20 xl:hover:opacity-80 pb-14 sm:pb-18"
            >
              <svg
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="75.443"
                height="75.443"
                viewBox="0 0 75.443 75.443"
              >
                <g transform="translate(-1741.014 -5869.77)">
                  <circle
                    cx="37.222"
                    cy="37.222"
                    r="37.222"
                    transform="translate(1741.514 5870.27)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <g>
                    <g>
                      <line
                        x1="28.574"
                        transform="translate(1764.448 5907.491)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                      />
                    </g>
                    <path
                      d="M1785.879,5900.348l7.144,7.144-7.144,7.144"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                  </g>
                </g>
              </svg>
            </button>
          )}

          <Swiper
            className="sardagna !overflow-visible"
            slidesPerView={1}
            centeredSlides
            spaceBetween={12}
            loop={false}
            speed={500}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            breakpoints={{
              1280: {
                speed: 500,
                slidesPerView: 2,
                spaceBetween: 25,
                loop: false,
                centeredSlides: false,
              },
            }}
          >
            {gallery.map((pic, index) => (
              <SwiperSlide key={index}>
                <a
                  href={pic.src}
                  data-fancybox="gallery"
                  className="relative group"
                >
                  <Image alt="gallery" src={pic} className="w-full h-auto" />
                  <span className="cover absolute top-0 left-0 w-full h-full bg-black block transition-all" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7.5xl px-0 relative h-[2px] mt-14 sm:mt-18 mx-auto">
        <div className="absolute top-0 w-full !h-[2px] -left-[1px] w-[calc(100%+2px)] bg-sardagna-primary/20">
          <div
            className="swiper-scrollbar !left-0 overflow-hidden !h-[2px] bg-sardagna-primary transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </section>
  );
}
