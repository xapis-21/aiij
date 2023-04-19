import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  //create 4 arrays of footer links one for projects,explore, support and about as i listed them below
  const projects = [
    {
      name: "Human Rights",
      path: "https://www.theiroom.com/program/human-rights",
    },
    {
      name: "Social Justice",
      path: "https://www.theiroom.com/program/social-justice",
    },
    {
      name: "Hard Questions",
      path: "https://www.theiroom.com/program/hard-questions",
    },
    {
      name: "Accountability",
      path: "https://www.theiroom.com/program/accountability",
    },
    {
      name: "Climate Change and Environmental Crime",
      path: "/program/climate-change-and-environment",
    },
  ];

  const explore = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-aiij" },
    { name: "Programs", path: "/programs" },
    { name: "contact us", path: "/contact" },
  ];

  const location = [
    { name: "+256 789620727", path: "" },
    { name: "Plot 12163", path: "" },
    { name: "Kira, Bulindo RD", path: "" },
  ];

  const about = [
    { name: "Stories", path: "https://www.theiroom.com/filter/stories" },
    { name: "Videos", path: "https://www.theiroom.com/filter/videos" },
    { name: "Podcasts", path: "https://www.theiroom.com/filter/podcasts" },
    { name: "Reels", path: "https://www.theiroom.com/filter/reels" },
  ];

  return (
    <footer className="bg-[#03100b] text-white relative w-full bottom-0 overflow-hidden isolate pt-8 px-4 lg:px-2">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 md:grid-cols-5 sm:gap-6 w-full">
            <a
              href={"https://www.africaniij.org"}
              className="flex gap-x-2 items-center flex-1"
            >
              <Image
                src={"/images/logo.svg"}
                height={100}
                width={100}
                alt={"iRoom Logo"}
                className="h-20"
              />
            </a>
            <FooterLinks title="Company" links={explore} />
            <FooterLinks title="Projects" links={projects} />
            <FooterLinks title="Location" links={location} />
            <FooterLinks title="iRoom" links={about} />
          </div>
        </div>

        <div className="w-full border-t-[.5px] border-t-igreen/40 sm:flex sm:items-center sm:justify-between mb-2 lg:mb-0 py-4">
          <div className="flex-1 flex flex-col-reverse gap-y-2 lg:flex-row justify-between">
            <a
              href="https://www.africaniij.org"
              className="mt-8 lg:mt-0 text-xs font-semibold text-gray-300 hover:text-igreen-light"
            >
              copyright &copy; 2023 AIIJ
            </a>
            <a
              href="mailto:xapisofficial@gmail.com"
              className="mt-8 lg:mt-0 text-xs font-semibold text-gray-300 hover:text-igreen-light"
            >
             Design + Dev | Shafic Zziwa @Tateno Pictures
            </a>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a href="https://www.facebook.com/AfricanIIJ">
                <BsFacebook className="hover:text-igreen-light duration-200" />
              </a>
              <a href="https://www.instagram.com/africaniij/">
                <BsInstagram className="hover:text-igreen-light duration-200" />
              </a>
              <a href="https://twitter.com/AfricanIIJ">
                <BsTwitter className="hover:text-igreen-light duration-200" />
              </a>
              <a href="https://www.youtube.com/@aiijchannel5382">
                <BsYoutube className="hover:text-igreen-light duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
