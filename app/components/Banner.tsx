import Image from 'next/image';
import React from 'react'

const Banner = () => {
   
  return (
    <section className="w-full max-w-[1280px] px-4 xl:px-2 mx-auto pb-20">
      <div className="mission-banner bg-cover bg-center w-full py-10 px-4 lg:px-12  bg-[#f2f2f2] rounded-2xl">
        <div className="mission-content container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <Image
            src={"/images/sandra-mission.png"}
            alt={""}
            width={500}
            height={400}
            className={"max-h-[400px] "}
          />
          <div className="flex-1 max-w-[600px]">
            <h1 className="mission-title text-3xl lg:text-4xl font-semibold  mb-4 lg:mb-0">
              Our Mission
            </h1>
            <p className="mission-text text-sm lg:text-base  mb-4 lg:mb-0">
              Growing investigative journalism in Africa through an integrated
              programme of training and capacity building, collaborative
              reporting, research, grant making and legal support.
            </p>
            <button className="read-more-btn bg-white text-black font-semibold py-2 px-4 rounded hover:bg-opacity-80 transition-all duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner