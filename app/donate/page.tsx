import DonationForm from "@/app/components/DonationForm";
import Image from "next/image";

export const metadata = {
  title: "Support | AIIJ",
};

const DonatePage = () => {
  return (
    <div className="w-full h-full ">
      <div className="h-full w-full after:absolute after:z-10 isolate after:content-['Support_AIIJ'] after:w-full after:h-full after:grid after:place-items-center after:bg-black/20 after:top-0 after:text-white after:left-0 after:font-heading after:text-4xl after:font-semibold max-h-[400px] relative">
        <Image
          src={
            "https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt={"Donate to African Institute for Investigative Journalism"}
          width={1920}
          height={600}
          className={
            "object-cover w-full h-full max-h-[250px] md:max-h-[400px]"
          }
        />
      </div>
      <div className="max-w-[700px] mx-auto md:mt-8 py-2 md:py-20">
        <DonationForm />
      </div>
    </div>
  );
};

export default DonatePage;
