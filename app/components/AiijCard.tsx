import Image from "next/image";
import Link from "next/link";

const AiijCard = () => {
  const mdStyles =
    "md:w-[500px] md:h-[500px] md:after:w-[400px] md:after:h-[400px] md:before:w-[400px] md:before:h-[400px]";
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-4 max-w-[1280px] mx-auto py-14 md:py-20 px-4 md:px-2">
      <div className="md:sticky top-40  md:w-1/2 duration-500">
        <div
          className={`w-[300px] h-[300px] flex-1 rounded-full  after:bg-iyellow/80 after:backdrop-blur-sm after:w-[200px] after:h-[200px] before:w-[200px] before:h-[200px] after:absolute after:rounded-full before:rounded-full after:top-[40%] isolate after:-z-10 after:left-[50%]  before:-z-20 before:left-[40%] before:top-[50%] after:-translate-x-[50%] after:-translate-y-[50%] relative before:-translate-x-[50%] before:-translate-y-[50%] before:absolute before:bg-[url('/images/pattern.svg')] 
        ${mdStyles}`}
        >
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden ">
            <Image
              src="/images/team/solomon_no_bg_alt.png"
              alt="Image description"
              className="rounded-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col items-start max-w-[600px] min-h-[500px] ">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-4">What is AIIJ?</h1>
          <p className="mb-12">
            AIIJ is an organization dedicated to fostering investigative
            journalism in Africa, with a focus on Uganda. We promote impactful
            media practices rooted in human rights and social justice, aiming to
            inform public discourse and create a supportive environment for
            passionate investigative journalists.
          </p>

          <h2 className="text-center text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-12">
            Growing investigative journalism in Africa through an integrated
            programme of training and capacity building, collaborative
            reporting, research, grant making and legal support.
          </p>

          <h2 className="text-center text-2xl font-bold mb-4">Our Vision</h2>
          <p className="mb-12">
            To be a Center of excellence for investigative journalism in defense
            of public interest.
          </p>
          <Link href={"/about-aiij"}>
            <button className=" bg-igreen px-6 py-1.5 text-white rounded-full text-sm font-[500]">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiijCard;
