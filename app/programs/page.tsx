import ProgramSection from "../components/ProgramSection";

const ProgramsPage = () => {
  const programs = [
    {
      title: "Training & Capacity Building",
      image: "/images/programs/train.jpeg",
      icon: "/images/svg/training.svg",
      desc: "We believe in and work hard to promote access to public resources and opportunities to conduct this form of journalism. And indeed, on this path we have in the last year 2020 worked with over 50 journalists to deepen investigative reporting in the areas of public debt management, SRHR and elections reporting.",
      benefits: [
        "Enhances journalists' skills in investigative reporting techniques.",
        "Builds a network of like-minded journalists, fostering collaboration and sharing of resources.",
        "Increases the credibility and professionalism of participating journalists.",
      ],
    },
    {
      title: "Collaborative reporting",
      image: "/images/programs/collab.jpeg",
      icon: "/images/svg/collab.svg",
      desc: "We also believe very strongly in collaborative reporting. A journalism that sees newsrooms as partners in the search for truth rather than competitors. As an institute we have – and will demonstrate in the coming weeks- investment in this form of reporting.",
      benefits: [
        "Leverages the strengths and resources of multiple newsrooms for more comprehensive investigations",
        "Increases the reach and impact of investigative stories.",
        "Encourages cross-border investigations, addressing issues that transcend national boundaries.",
        "Reduces duplication of efforts, leading to more efficient use of resources.",
      ],
    },
    {
      title: "Grant Making",
      image: "/images/programs/grant.jpeg",
      icon: "/images/svg/grant.svg",
      desc: "We believe in well funded investigative reporting that access the human and documentary sources required for storytelling and that places reporters in the direct circumstances of the aspects they report on. The institute, working with partners thus provides and sources for grants for impactful investigative story telling.",
      benefits: [
        "Provides financial support for in-depth, resource-intensive investigations.",
        "Enables journalists to access critical sources and conduct on-the-ground reporting.",
        "Promotes accountability and transparency by funding investigations into important societal issues.",
      ],
    },
    {
      title: "Legal Support",
      image: "/images/programs/legal.jpeg",
      icon: "/images/svg/legal.svg",
      desc: "We know however that telling the truth, ruffling feathers, stepping on toes and the many maxims that Investigative Journalism is accorded creates an environment of hostility to the reporters and editors who pursue it. As an institute we are also dedicated to legal support for investigative journalists who are arrested or even mildly discomforted in the pursuit of investigative stories.",
      benefits: [
        "Protects journalists from legal repercussions, enabling them to pursue sensitive investigations.",
        "Offers guidance on navigating complex legal issues related to investigative journalism.",
        "Advocates for press freedom and the rights of investigative journalists.",
      ],
    },
    {
      title: "Research",
      image: "/images/programs/research.jpeg",
      icon: "/images/svg/research.svg",
      desc: "The research program focuses on investigating and studying different phenomena to create a body of work that can be used to advance investigative journalism in the continent. The program also documents Africa’s big investigative stories annually.",
      benefits: [
        "Generates a solid knowledge base to inform and guide investigative journalism practices.",
        "Contributes to the development of innovative reporting methods and tools.",
        "Provides valuable insights into emerging trends and challenges in investigative journalism.",
      ],
    },
  ];
  return (
    <main className="py-20">
      <div className="max-w-[1280px] mx-auto md:pt-8 px-4 md:px-2">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">
            Programs at AIIJ
          </h1>
          <p className="mb-12">
            We empower Africa's next-generation investigative journalists
            through skill development, collaboration, and resource provision.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 ">
        {programs.map(({ image, title, icon, desc, benefits }, i) => (
          <section className="group even:bg-igreen/5 py-8">
            <ProgramSection
              key={image}
              image={image}
              title={title}
              icon={icon}
              style="flex-col md:flex-row md:group-even:flex-row-reverse"
              description={desc}
              benefits={benefits}
            />
          </section>
        ))}
      </div>
    </main>
  );
};

export default ProgramsPage;
