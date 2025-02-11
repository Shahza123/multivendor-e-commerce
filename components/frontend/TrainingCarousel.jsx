"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function TrainingCarousel({ trainings }) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
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
      {trainings?.map((training, i) => {
        return (
          <div
            className="rounded-lg mr-3  bg-slate-100 dark:bg-slate-900 overflow-hidden"
            key={i}
          >
            <Link href="/">
              <Image
                src={training.imageUrl}
                alt={training.title}
                width={556}
                height={556}
                className="w-full object-cover h-48"
              />
            </Link>
            <h2 className="text-xl my-2 text-slate-800 text-center dark:text-slate-200">
              {training.title}
            </h2>
            <p className="break-words px-4 line-clamp-3  text-slate-800 dark:text-slate-300 mb-2">
              {training.description}
            </p>
            <div className="flex justify-between items-center px-4 py-2">
              <Link
                href="/"
                className="bg-lime-600 hover:bg-lime-700 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
              >
                Read more
              </Link>
              <Link href="/" className="text-slate-800 dark:text-slate-100">
                Talk to the consultant
              </Link>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
