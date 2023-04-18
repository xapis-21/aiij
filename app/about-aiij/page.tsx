import Image from "next/image";
import Member from "../components/Member";

const AboutPage = () => {
  return (
    <main className="py-20">
      <div className="max-w-[1280px] mx-auto md:pt-8 px-4 md:px-2">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">
            About the AIIJ
          </h1>
          <p className="mb-12">
            AIIJ is an organization dedicated to fostering investigative
            journalism in Africa, with a focus on Uganda. We promote impactful
            media practices rooted in human rights and social justice, aiming to
            inform public discourse and create a supportive environment for
            passionate investigative journalists.
          </p>
        </div>
      </div>
      <div className="bg-iyellow after:absolute after:bg-[url(/images/pattern_w.svg)] after:w-full after:h-full after:top-0 after:left-0 after:-z-10 isolate relative px-2">
        <Image
          src={"/images/team/team.jpeg"}
          alt="AIIJ team"
          width={1300}
          height={700}
          className="w-full h-[300px] md:h-[400px] max-w-[1280px] mx-auto object-cover object-top"
        />
      </div>

      <section className="bg-iyellow/5">
        {" "}
        <div className="max-w-[1280px] mx-auto pt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-2 pb-14">
          <div className="flex flex-col items-start max-w-[400px]">
            <h2 className="text-center text-2xl font-bold mb-4 text-igreen">
              Our Vision
            </h2>
            <p className=" mb-8 md:mb-12">
              To be a Center of excellence for investigative journalism in
              defense of public interest.
            </p>
            <h2 className="text-center text-2xl font-bold mb-4 text-igreen">
              Our Mission
            </h2>
            <p className=" mb-8 md:mb-12">
              Growing investigative journalism in Africa through an integrated
              programme of training and capacity building, collaborative
              reporting, research, grant making and legal support.
            </p>
          </div>
          <div className="flex flex-col items-start max-w-[400px]">
            <h2 className="text-center text-2xl font-bold mb-4 text-igreen">
              Our Objectives
            </h2>
            <ol className="bgired list-decimal flex flex-col gap-4">
              <li className="flex gap-4">
                <span className="rounded-full text-white  bg-iyellow grid place-items-center font-heading text-2xl p-4">
                  1
                </span>
                <p>
                  Promoting access to resources and opportunities for
                  investigative journalism
                </p>
              </li>
              <li className="flex gap-4">
                <span className="rounded-full text-white  bg-iyellow grid place-items-center font-heading text-2xl p-4">
                  2
                </span>
                <p>
                  Strengthening the capacities and practice of investigative
                  journalism
                </p>
              </li>
              <li className="flex gap-4">
                <span className="rounded-full text-white  bg-iyellow grid place-items-center font-heading text-2xl p-4">
                  3
                </span>
                <p>
                  Shaping the practice of investigative journalism through
                  collaborative and ground breaking investigations in issues
                  affecting society
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="max-w-[1280px] mx-auto pt-14 px-4 md:px-2">
        <div className="flex flex-col items-start max-w-[600px]">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">
            Meet the Team
          </h1>
          <p className="mb-12">
            We are exceptionally grateful to smart and yet humble team always
            pitching fresh and radical ideas to deepen investigative journalism
            not only in Uganda but also on the continent.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-8">
          <Member
            src={"/images/team/solomon_no_bg.png"}
            name={"Solomon Serwanja"}
            title={"Executive Director"}
          />
          <Member
            src={"/images/team/raymond_no_bg.png"}
            name={"Raymond Mujuni"}
            title={"Deputy Executive Director"}
          />
          <Member
            src={"/images/team/rahim_no_bg.png"}
            name={"Rahim Nwali"}
            title={"Chief of Operations"}
          />
          <Member
            src={"/images/team/talent_no_bg.png"}
            name={"Talent Akankunda"}
            title={"Finance and Admin Officer"}
          />

          <Member
            src={"/images/team/sandra_no_bg.png"}
            name={"Sandra Nansubuga"}
            title={"Procurement Officer"}
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
