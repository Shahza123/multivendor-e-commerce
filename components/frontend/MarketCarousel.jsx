"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
export default function MarketCarousel({ markets }) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-4"
    >
      {markets?.
      map((market, i) => {
        return (
          <Link href="#" className="rounded-lg mr-3 bg-red-400" key={i}>
            <Image
              src={market.imageUrl}
              alt={market.title}
              width={556}
              height={556}
              className="w-full rounded-2xl"
            />
            <h2 className="mt-2 text-slate-800 text-center dark:text-slate-200">
              {market.title}
            </h2>
          </Link>
        );
      })}
    </Carousel>
  );
}
