import { HiBars3, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";




const Popover = ({ categories }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" lg:hidden block  pr-8">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center after:scale-110 hover:after:bg-white/10 cursor-pointer outline-none relative after:absolute isolate after:-z-10 duration-300 after:rounded-full after:w-full after:h-full after:top-0 after:left-0 "
        aria-label="Menu"
      >
        <HiBars3 className="text-white text-3xl" />
      </button>

      {open && (
        <nav className=" h-screen w-screen bg-black/40 flex justify-end absolute  right-0 top-0 z-50 animate-slideLeftAndFade gap-x-2">
          <button
            onClick={() => setOpen(false)}
            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center after:scale-110 after:bg-iyellow outline-none relative after:absolute isolate after:-z-10 duration-300 after:rounded-full after:w-full after:h-full after:top-0 after:left-0 mt-2"
            aria-label="Menu"
          >
            <HiXMark className="text-igreen text-3xl" />
          </button>
          <ul className="flex flex-col gap-y-4 bg-igreen/90 backdrop-blur-3xl w-screen h-screen max-w-[80%] px-4 py-4 whitespace-normal">
            {categories.map(({ label, href }:any) => (
              <li
                key={href}
                className="text-xs px-4 font-semibold active:bg-iyellow/10 w-full rounded-full py-2.5"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <div className="flex text-iyellow gap-x-2 pl-4">
              <Link href={"/donate"}>
                <button className=" bg-iyellow border border-iyellow px-4 py-1.5 text-black rounded-full text-sm font-[500]">
                  Donate
                </button>
              </Link>
            </div>
            <div className="mt-4 flex space-x-6 pl-4 sm:mt-0 sm:justify-center">
              <a href="#">
                <BsFacebook className="hover:text-igreen-light duration-200" />
              </a>
              <a href="#">
                <BsInstagram className="hover:text-igreen-light duration-200" />
              </a>
              <a href="#">
                <BsTwitter className="hover:text-igreen-light duration-200" />
              </a>
              <a href="#">
                <BsYoutube className="hover:text-igreen-light duration-200" />
              </a>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Popover;
