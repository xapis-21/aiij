import Image from "next/image";

type ProgramSectionProps = {
  image: string;
  icon: string;
  title: string;
  description: string;
  style: string;
  benefits?: string[];
};

const ProgramSection = ({
  image,
  icon,
  title,
  description,
  style,
  benefits,
}: ProgramSectionProps) => {
  const beforeStyle =
    "before:bg-[url('/images/pattern.svg')] before:absolute before:top-20 before:left-0 before:w-full before:h-full before:opacity-5 before:-z-10";
  return (
    <div className={`flex gap-8 items-start max-w-[1280px] mx-auto px-4 md:px-2 ${style} `}>
      <div
        className={`flex-[1.3] h-[700px] relative flex justify-end group-even:justify-start  isolate ${beforeStyle}`}
      >
        <Image
          height={900}
          width={800}
          src={image}
          alt={title}
          className=" w-full md:w-[80%] h-[90%] object-cover rounded-md shadow-2xl"
        />
        <div className="absolute top-0 group-odd:right-0 group-even:left-0 w-[80%] h-[90%] flex items-end justify-end group-even:justify-start">
          <div className=" grid place-items-center bg-igreen md:group-even:-translate-x-11 md:translate-x-11 md:translate-y-11 h-16 w-16  md:h-20 md:w-20 rounded-full overflow-hidden">
            <Image
              src={icon}
              alt={title + "at AIIJ"}
              width={50}
              height={50}
              className={"h-full w-full scale-105 object-center"}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start max-w-[500px]">
        <h2 className="text-center text-2xl font-bold mb-4 text-igreen">
          {title}
        </h2>
        <p className=" mb-8 md:mb-12">{description}</p>
        <h3 className="text-center text-xl font-bold mb-4 text-igreen">
          Benefits
        </h3>
        <ul className="flex flex-col items-start list-disc list-inside gap-y-8">
          {benefits?.map((benefit) => (
            <li>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramSection;
