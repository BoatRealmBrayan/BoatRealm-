"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Boat General Information",
    image: "/features/boat-general-info.svg",
    alt: "Boat profile with engine and generator details",
  },
  {
    title: "Engine & Generator Info",
    image: "/features/vessel-engine-info.svg",
    alt: "Engine information panel",
  },
  {
    title: "Generator Information",
    image: "/features/generator-info.svg",
    alt: "Generator details and service record",
  },
  {
    title: "Maintenance Ledger",
    image: "/features/maintenance-ledger.svg",
    alt: "Maintenance and repair ledger grouped by category",
  },
  {
    title: "Monthly Spending",
    image: "/features/monthly-spending.svg",
    alt: "Monthly spending totals bar chart",
  },
  {
    title: "Spending Breakdown",
    image: "/features/monthly-spending2.svg",
    alt: "Detailed spending breakdown by category",
  },
  {
    title: "Receipt Auto Analyzer",
    image: "/features/Receipt-auto-analyser.svg",
    alt: "Receipts and invoices auto scanned and categorized",
  },
  {
    title: "PDF Export",
    image: "/features/pdf-export.svg",
    alt: "Vessel records exported as PDF files",
  },
  {
    title: "Document Vault",
    image: "/features/boat-document-vault.svg",
    alt: "Securely stored vessel documents",
  },
];

export default function FeatureSlider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1.2}
      centeredSlides
      spaceBetween={24}
      loop
      autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        600: { slidesPerView: 1.6, spaceBetween: 28 },
        900: { slidesPerView: 2.4, spaceBetween: 32 },
        1200: { slidesPerView: 3, spaceBetween: 36 },
      }}
      className="feature-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.title} className="feature-swiper-slide">
          <div className="feature-slide-img-wrap">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={380}
              height={260}
              loading={index === 0 ? "eager" : "lazy"}
              className="feature-slide-img"
            />
          </div>
          <p className="feature-slide-label">{slide.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
