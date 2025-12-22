import type { PropertyData } from "@/types/property";

import plan03Image from "@/public/landings/tigli/planimetrie/0.3.jpg";
import plan11Image from "@/public/landings/tigli/planimetrie/1.1.jpg";
import plan12Image from "@/public/landings/tigli/planimetrie/1.2.jpg";
import plan13Image from "@/public/landings/tigli/planimetrie/1.3.jpg";
import logoImage from "@/public/landings/tigli/svg/logo-ai-tigli-2.svg";
import badgeImage from "@/public/landings/tigli/svg/badge.svg";
import symbolImage from "@/public/landings/tigli/svg/tigli-watermark-2.svg";
import gallery1 from "@/public/landings/tigli/gallery/sogg03.jpg";
import gallery2 from "@/public/landings/tigli/gallery/singola.jpg";
import gallery3 from "@/public/landings/tigli/gallery/CREPUSCOLO.jpg";
import gallery4 from "@/public/landings/tigli/gallery/bagno.jpg";
import gallery5 from "@/public/landings/tigli/gallery/sogg1.jpg";
import gallery6 from "@/public/landings/tigli/gallery/soggiorno05.jpg";
import footerLeft from "@/public/landings/tigli/svg/decorations/footer-left.png";
import footerRight from "@/public/landings/tigli/svg/decorations/footer-right.png";

// Benefits icons
import icon1 from "@/public/landings/tigli/svg/ico-1-short.svg";
import icon2 from "@/public/landings/tigli/svg/ico-2-short.svg";
import icon3 from "@/public/landings/tigli/svg/ico-3-short.svg";

export const tigliData: PropertyData = {
  propertyId: "tigli",
  propertyName: "Residenza ai Tigli",
  hero: {
    headline: "Vivere in armonia con la natura",
    ctaText: "Scopri di più",
    availableUnits: 4,
    backgroundImage: "/landings/tigli/gallery/bg-image.jpg",
    logoImage: logoImage,
    badgeImage: badgeImage,
    decorations: {
      topLeft: "",
      //topLeft: "/landings/tigli/svg/decorations/top-left.png",
      topRight: "",
      //topRight: "/landings/tigli/svg/decorations/top-right.png",
    },
  },
  timeline: {
    title:
      'Un progetto immobiliare curato in ogni dettaglio e firmato <span class="underline">Proget Casa</span>, specializzata in residenze di alta qualità in Trentino.',
    symbolImage: symbolImage,
    constructionStart: {
      label: "Inizio lavori",
      date: "Gennaio 2025",
    },
    constructionEnd: {
      label: "Fine lavori",
      date: "Estate 2026",
    },
  },
  floorPlans: {
    title: "Le soluzioni disponibili",
    subtitle:
      "Scegli tra le diverse tipologie ancora disponibili, in base alle tue esigenze di spazio.",
    plans: [
      {
        title: "Due stanze - Piano terra",
        size: "74 m2",
        image: plan03Image,
        pdf: "/landings/tigli/planimetrie/0.3.pdf",
        priceLabel: "A partire da",
      },
      {
        title: "Tre stanze - Piano primo",
        size: "113 m2",
        image: plan11Image,
        pdf: "/landings/tigli/planimetrie/1.1.pdf",
        priceLabel: "A partire da",
      },
      {
        title: "Tre stanze - Piano primo",
        size: "108 m2",
        image: plan12Image,
        pdf: "/landings/tigli/planimetrie/1.2.pdf",
        priceLabel: "A partire da",
      },
      {
        title: "Due stanze - Piano primo",
        size: "74 m2",
        image: plan13Image,
        pdf: "/landings/tigli/planimetrie/1.3.pdf",
        priceLabel: "A partire da",
      },
    ],
    downloadButtonText: "Scarica planimetria",
  },
  statistics: {
    buildings: {
      label: "Struttura",
      value: "1 palazzina",
    },
    totalUnits: {
      label: "Totale unità",
      value: "6 appartamenti",
    },
  },
  benefits: {
    title: "Benefits",
    items: [
      {
        icon: icon1,
        title: "Soluzioni in classe A+",
        description:
          "Con pompe di calore, pannelli fotovoltaici e ricambio dell'aria automatizzato.",
      },
      {
        icon: icon2,
        title: "Riscaldamento radiante",
        description:
          "Pavimento radiante reversibile per riscaldamento d'inverno e raffrescamento estivo.",
      },
      {
        icon: icon3,
        title: "Vista panoramica",
        description:
          "Ampie terrazze rivolte a sud con vista mozzafiato sulla Vallagarina.",
      },
    ],
  },
  gallery: {
    description:
      "6 unità abitative esclusive nel cuore di Marano d'Isera. Architettura contemporanea che valorizza il paesaggio circostante, con ampie terrazze rivolte a sud e vista panoramica sulla Vallagarina. Ideali per chi cerca tranquillità senza rinunciare al comfort di una abitazione nuova, dotata delle migliori tecnologie per l'abitare sostenibile.",
    ctaText: "Richiedi informazioni",
    images: [gallery1, gallery2],
  },
  swiperGallery: {
    backgroundColor: "#fbf4f6",
    decorationImage: "/landings/tigli/svg/decorations/gallery.png",
    images: [gallery3, gallery4, gallery5, gallery6],
  },
  map: {
    headline: "Nel cuore della Vallagarina, a pochi minuti da Rovereto",
    ctaText: "Richiedi informazioni",
    backgroundImage: "/landings/tigli/map.jpg",
    pointerImage: symbolImage,
    decorationImage: "/landings/tigli/svg/decorations/map.png",
  },
  footer: {
    companyName: "PROGET CASA S.R.L.",
    address: "Via per Marco, 12/A – 38068 Rovereto (TN)",
    vatNumber: "02374890222",
    madeBy: "Hausbox",
    decorations: {
      left: footerLeft,
      right: footerRight,
    },
  },
  form: {
    logoImage: symbolImage,
  },
};
