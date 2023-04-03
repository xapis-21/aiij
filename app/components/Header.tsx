"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  HiOutlineEllipsisVertical,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { useCallback, useEffect, useState } from "react";

const categories = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/programs",
    label: "Programs",
    subLinks: [
      { href: "/training", label: "Training and Capacity Building" },
      { href: "/collaborative-reporting", label: "Collaborative Reporting" },
      {
        href: "/research-and-legal-support",
        label: "Research and Legal Support",
      },
      { href: "/iroom-stories", label: "iRoom Stories" },
    ],
  },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/donate", label: "Donate" },
];

const Header = () => {
  const [stickNav, setStickNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setStickNav(prevScrollPos > 400);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, stickNav, handleScroll]);

  return (
    <header
      className={`${
        stickNav ? "h-14" : " h-14 lg:h-20"
      } w-full fixed top-0 z-50 text-white duration-300 transition-all px-4 xl:px-2  `}
    >
      <div className="bg-[url('/pattern.svg')] w-full absolute h-full top-[17%] left-0 -z-10 " />
      <div className="max-w-[1280px] h-full mx-auto flex justify-between items-center">
        <div className="flex items-center md:gap-x-8  md:w-full h-full w-full max-w-[1000px]">
          <Link href={"/"} className="flex gap-x-2 items-center ">
            <Image
              src={"/images/logo_w.svg"}
              height={40}
              width={100}
              alt={"iRoom Logo"}
              className="h-10 w-10 object-contain"
            />
            <span className="font-semibold text-xs">African Institute for Investigative Journalism</span>
          </Link>

          <div className="hidden md:block w-full h-full">
            <nav className="px-8 h-full">
              <ul className="hidden md:flex gap-x-8 text-sm h-full items-center">
                {categories.slice(0, 4)?.map(({ label, href }) => (
                  <li
                    key={href}
                    className={`${
                      pathname === "/program/" + href &&
                      "text-iyellow after:scale-x-100"
                    } after:absolute after:bg-iyellow after:w-full after:h-[2px] after:bottom-0 hover:text-iyellow relative after:left-0 h-full after:scale-x-0 hover:after:scale-x-100 after:origin-left duration-300 after:rounded-full grid place-items-center after:duration-500"`}
                  >
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="hidden lg:flex text-iyellow gap-x-4">
          <Link href={"/donate"}>
            <button className=" bg-iyellow px-6 py-1.5 text-black rounded-full text-sm font-[500]">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
