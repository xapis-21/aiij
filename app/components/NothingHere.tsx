import Image from "next/image";

const NothingHere = ({image,text}:{image:string,text:string}) => {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="flex flex-col pt-20 items-center">
        <Image
          src={image}
          alt={""}
          width={400}
          height={400}
          className={"h-72 object-contain grayscale"}
        />
        <p className="py-4 text-2xl text-gray-300 font-normal">
          {text}
        </p>
      </div>
    </div>
  );
};

export default NothingHere;
