import Image from "next/image";
import Hero from "./components/Hero";
import ProgramCard from "./components/ProgramCard";

export default function Home() {
  const programs = [
    {
      title: "Training & Capacity Building",
      image:
        "https://images.pexels.com/photos/6737865/pexels-photo-6737865.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      icon: "/images/training.svg",
    },
    {
      title: "Collaborative reporting",
      image:
        "https://images.pexels.com/photos/14688726/pexels-photo-14688726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      icon: "/images/collab.svg",
    },
    {
      title: "Grant Making",
      image:
        "https://images.pexels.com/photos/14700009/pexels-photo-14700009.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      icon: "/images/grant.svg",
    },
    {
      title: "Legal Support",
      image:
        "https://images.pexels.com/photos/14284272/pexels-photo-14284272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      icon: "/images/legal.svg",
    },
    {
      title: "Research",
      image:
        "https://images.pexels.com/photos/13104454/pexels-photo-13104454.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      icon: "/images/research.svg",
    },
  ];
  return (
    <main className="flex-grow">
      <Hero />
      <section className="py-20 relative">
        <div className=" before:absolute before:w-full before:h-full before:left-0 before:right-0 before:opacity-5 before:bg-[url('/images/pattern.svg')] w-full absolute h-full top-0 left-0 -z-10 after:absolute after:bg-gradient-to-t after:from-white after:via-white/60 after:top-0 after:left-0 after:w-full after:h-full" />
        <div className="flex justify-center w-full gap-4 mx-auto border">
          {programs.map(({ image, title, icon }) => (
            <div className="border h-[500px] even:items-end flex">
              <ProgramCard image={image} icon={icon} title={title} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
