"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const Partners = () => {
  const posts = [10, 2, 3, 4, 5, 6, 7, 8, 1, 9, 10, 4, 6, 11, 12, 13];

  return (
    <div
      className="w-full mx-auto py-8 flex flex-col my-4 gap-8 md:px-4 max-w-[1350px]
    "
    >
      <Marquee
        pauseOnClick={true}
        pauseOnHover={true}
        speed={20}
        gradient={true}
      >
        {posts
          .filter((e, i) => i <= 6)
          .map((post) => (
            <Image
              height={110}
              width={300}
              src={`/images/partners/partner-${post}.png`}
              alt={""}
              className={
                "h-[50px] w-auto mx-4 grayscale hover:grayscale-0 duration-300"
              }
            />
          ))}
      </Marquee>

      <Marquee
        pauseOnClick={true}
        pauseOnHover={true}
        speed={20}
        gradient={true}
        direction={"rtl"}
      >
        {posts
          .filter((e, i) => i > 6)
          .map((post) => (
            <Image
              height={110}
              width={300}
              src={`/images/partners/partner-${post}.png`}
              alt={""}
              className={
                "h-[50px] w-auto mx-4 grayscale hover:grayscale-0 duration-300"
              }
            />
          ))}
      </Marquee>
    </div>
  );
};

export default Partners;
