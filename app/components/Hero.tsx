"use client";
import Image from "next/image";

// components/Hero.js
import { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/2305084/pexels-photo-2305084.jpeg?auto=compress&cs=tinysrgb&w=1000",
  // ...add more images
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen max-h-[900px] after:absolute relative after:bg-gradient-to-r after:from-igreen after:via-igreen/80 after:w-full after:h-full after:to-transparent before:absolute before:w-full before:h-full before:bg-black/60 after:z-20 before:z-10 isolate">
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
      <div className="absolute inset-0 w-full h-full flex items-center justify-start z-30 max-w-[1280px] left-[50%] -translate-x-[50%]">
        <div className="text-4xl md:text-6xl font-bold text-center max-w-[600px]">
          <h1 className="flex flex-col text-[100px] text-left text-white ">
            <span>Investigative journalism in</span>
           defense of
            public
           interest.
          </h1>
        </div>
      </div>
    </div>
  );
}
