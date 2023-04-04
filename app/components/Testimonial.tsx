import Image from "next/image";

const Testimonial = ({ image, name, title, testimonial }: any) => {
  return (
    <div className="flex flex-col flex-1 bg-[#f2f2f2] rounded-lg p-4 w-[300px]">
      <div className="flex gap-4">
        <Image
          src={image}
          alt={name + title + "likes Aiij"}
          height={50}
          width={50}
          className={"h-10 w-10 rounded-md"}
        />
        <div className="text-xs">
          <span className="font-semibold">{name}</span>
          <br />
          <span>{title}</span>
        </div>
      </div>
      <p className="pt-2 text-sm">{testimonial}</p>
    </div>
  );
};

export default Testimonial;
