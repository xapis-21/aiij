"use client";
import Image from "next/image";
import Link from "next/link";

// components/Hero.js
import { useState, useEffect } from "react";

const images = [
  "/images/hero-images/hero-1.jpeg",
  "/images/hero-images/hero-2.jpeg",
  "/images/hero-images/hero-3.jpeg",
  "/images/hero-images/hero-4.jpeg",
  "/images/hero-images/hero-5.jpeg",
  // ...add more images
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen max-h-[1000px] after:absolute relative md:after:bg-gradient-to-r after:bg-gradient-to-t after:from-black after:via-igreen/80 after:w-full after:h-full after:to-transparent before:absolute before:w-full before:h-full before:bg-black/60 after:z-20 before:z-10 isolate ">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          width={1000}
          height={900}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 w-full h-full flex items-center justify-start z-30 max-w-[1280px] left-[50%] -translate-x-[50%] ">
        <div className="text-4xl md:text-6xl font-bold text-center max-w-[600px] px-4 xl:px-2 flex flex-col items-start">
          <h1 className="flex flex-col text-[50px] md:text-[100px] text-left text-white leading-[1] tracking-wide">
            <span>Investigative journalism in</span>
            defense of public interest.
          </h1>
          <Link href={"/contact"}>
            <button className=" bg-iyellow px-6 py-1.5 text-black rounded-full text-sm font-[500]">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
