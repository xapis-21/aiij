import { groq } from "next-sanity";
import Image from "next/image";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import ProgramCard from "./components/ProgramCard";
import { clientFetch } from "./lib/sanity.client";
import { addTypeToPosts } from "@/app/lib/utils";
import PostGrid from "./components/PostGrid";
import Testimonial from "./components/Testimonial";
import ProjectCards from "./components/ProjectCards";
import AiijCard from "./components/AiijCard";

export default async function Home() {
  const programs = [
    {
      title: "Training & Capacity Building",
      image: "/images/programs/train.jpeg",
      icon: "/images/svg/training.svg",
    },
    {
      title: "Collaborative reporting",
      image: "/images/programs/collab.jpeg",
      icon: "/images/svg/collab.svg",
    },
    {
      title: "Grant Making",
      image: "/images/programs/grant.jpeg",
      icon: "/images/svg/grant.svg",
    },
    {
      title: "Legal Support",
      image: "/images/programs/legal.jpeg",
      icon: "/images/svg/legal.svg",
    },
    {
      title: "Research",
      image: "/images/programs/research.jpeg",
      icon: "/images/svg/research.svg",
    },
  ];

  const testimonials = [
    {
      name: "Ben Bella Illakut",
      image: "/images/testimonial/ben.jpeg",
      comment:
        "The role of Investigative Journalism is to dig deeper into public records and investigate what is going on then inform the people.",
      title: "Vetaran Investigative Journalist",
    },
    {
      name: "Dr. Peter G. Mwesige",
      image: "/images/testimonial/peter.jpeg",
      comment:
        "Investigative reporting does help us to hold those in power accountable. It helps us shape public policy. We need to invest more in Investigative Journalism.",
      title: "Executive Director, ACME",
    },
    {
      name: "David Kaplan ",
      image: "/images/testimonial/david.jpeg",
      title: "Executive Director, GIJN",
      comment:
        "Investigative Journalism has a strong emphasis on social justice and accountability.",
    },
  ];

  const stories = await clientFetch(
    groq`*[_type == "story"] | order(_createdAt desc) {
  ...,
      "category": category->category,
   
      comments[]->{author->{name,image_url}, comment},
    }`
  );

  const videos = await clientFetch(
    groq`*[_type == "video"] | order(_createdAt desc) {
   ...,
      "category": category->category,
      comments[]->{author->{name,image_url}, comment},
    }`
  );

  const podcasts = await clientFetch(
    groq`*[_type == "podcast"] | order(_createdAt desc) {
   ...,
      "category": category->category,
      comments[]->{author->{name,image_url}, comment},
    }`
  );

  const posts = [
    ...addTypeToPosts(stories, "story"),
    ...addTypeToPosts(videos, "video"),
    ...addTypeToPosts(podcasts, "podcast"),
  ];

  return (
    <main className="flex-grow">
      <Hero />
      <Partners />
      <section className="bg-igreen/5">
        <AiijCard />
      </section>
      <section className="py-20 pb-2 md:pb-20 relative">
        <div className=" before:absolute before:w-full before:h-full before:left-0 before:right-0 before:opacity-5 before:bg-[url('/images/pattern.svg')] w-full absolute h-full top-0 left-0 -z-10 after:absolute after:bg-gradient-to-t after:from-white after:via-white/60 after:top-0 after:left-0 after:w-full after:h-full" />
        <div
          className="max-w-[1280px] mx-auto flex flex-col items-start px-4 md:px-2
       "
        >
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">
            Our Programs
          </h1>
          <h2 className="text-base md:text-4xl max-w-[600px]">
            We empower Africa's next-generation investigative journalists
            through skill development, collaboration, and resource provision.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full md:gap-4 mx-auto py-20 pb-2 md:pb-20 ">
          {programs.map(({ image, title, icon }) => (
            <div key={image} className="h-[500px] md:even:items-end flex ">
              <ProgramCard image={image} icon={icon} title={title} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-igreen/5 py-20 ">
        <ProjectCards />
      </section>
      <section className=" bg-iyellow/10 py-20 flex flex-col items-center">
        <PostGrid
          title={"LATEST"}
          posts={posts.splice(0, 4)}
        />
        <a href="" className="mx-auto mt-8">
          <button className="px-8 py-2.5 bg-igreen text-white font-semibold mx-auto rounded-full">
            More investigations on iRoom
          </button>
        </a>
      </section>
      {/* <Banner /> */}
      <section className="py-20 relative bg-igreen text-white flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold">Got a Story?</h1>
        <a
          href="https://www.theiroom.com/share-a-tip"
          className="text-iyellow underline"
        >
          Share on iRoom
        </a>
      </section>
      <section className="py-20">
        <div
          className="max-w-[1280px] mx-auto flex flex-col items-start mb-14 px-4 md:px-2
        "
        >
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">Testimonials</h1>
          <h2 className="text-base md:text-4xl max-w-[600px]">
            Real-life stories and experiences that inspire us to continue our
            mission of promoting social change through investigative journalism.
          </h2>
        </div>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start flex-wrap gap-4 px-4 md:px-2">
          {testimonials.map(({ name, image, comment, title }) => (
            <Testimonial
              key={name}
              name={name}
              image={image}
              testimonial={comment}
              title={title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
