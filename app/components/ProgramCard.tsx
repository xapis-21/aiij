import Image from "next/image";

type ProgramCardProps = {
  image: string;
  icon: string;
  title: string;
};

const ProgramCard = ({ image, icon, title }: ProgramCardProps) => {
  return (
    <div className="w-full h-[80%] flex-1 relative shadow-2xl hover:scale-105 hover:-translate-y-2 duration-500">
      <Image
        src={image}
        alt={title + "at AIIJ"}
        width={400}
        height={500}
        className={"max-h-[400px] h-full w-full md:max-w-[360px] object-cover"}
      />
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-full h-full flex items-end justify-center">
        <h2 className="text-white mb-14 font-semibold">{title}</h2>
        <div className="absolute bottom-0 left-[50%] grid place-items-center bg-igreen -translate-x-[50%] translate-y-[50%] h-16 w-16 rounded-full overflow-hidden">
          <Image
            src={icon}
            alt={title + "at AIIJ"}
            width={50}
            height={50}
            className={"h-16 w-16 scale-105 object-center"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
