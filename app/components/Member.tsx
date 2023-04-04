import Image from "next/image";

const Member = ({ src, name, title }: any) => {
  return (
    <div className="flex flex-col max-w-[300px]">
      <div className="bg-iyellow rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={name + "is a member of the AIIJ"}
          width={300}
          height={300}
        />
      </div>
      <div className="pb-8 pt-4">
        <h2 className="font-bold">{name}</h2>
        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
};

export default Member;
