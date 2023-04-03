import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  //create 4 arrays of footer links one for projects,explore, support and about as i listed them below
  const projects = [
    { name: "Human Rights", path: "/program/human-rights" },
    { name: "Social Justice", path: "/program/social-justice" },
    { name: "Hard Questions", path: "/program/hard-questions" },
    { name: "Accountability", path: "/program/accountability" },
    {
      name: "Climate Change and Environmental Crime",
      path: "/program/climate-change-and-environment",
    },
  ];

  const explore = [
    { name: "Stories", path: "/filter/stories" },
    { name: "Videos", path: "/filter/videos" },
    { name: "Podcasts", path: "/filter/podcasts" },
    { name: "Reels", path: "/filter/reels" },
  ];

  const support = [
    { name: "Donate", path: "/donate" },
    { name: "Share a tip", path: "/share-a-tip" },
  ];

  const about = [
    { name: "iRoom", path: "/about" },
    { name: "AIIJ Website", path: "http://www.africaniij.org" },
  ];

  return (
    <footer className="bg-[#03100b] text-white relative w-full bottom-0 overflow-hidden isolate pt-8 px-4 lg:px-2">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 md:grid-cols-4 sm:gap-6 w-full">
            <FooterLinks title="Projects" links={projects} />
            <FooterLinks title="Explore" links={explore} />
            <FooterLinks title="Support" links={support} />
            <FooterLinks title="About" links={about} />
          </div>
        </div>

        <div className="w-full border-t-[.5px] border-t-igreen/40 sm:flex sm:items-center sm:justify-between mb-2 lg:mb-0 py-4">
          <a
            href={"https://www.africaniij.org"}
            className="flex gap-x-2 items-center flex-1"
          >
            <Image
              src={"/images/logo.svg"}
              height={40}
              width={40}
              alt={"iRoom Logo"}
              className="h-10"
            />
            <span className="flex max-w-[150px] text-xs hover:text-igreen-light">
              African Institute of Investigative Journalism
            </span>
          </a>
          <div className="flex-1 flex flex-col-reverse gap-y-2 lg:flex-row justify-between">
            <a
              href="https://www.africaniij.org"
              className="mt-8 lg:mt-0 text-xs font-semibold text-gray-300 hover:text-igreen-light"
            >
              copyright &copy; 2023 AIIJ
            </a>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
