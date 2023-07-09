import Image from "next/image";

export const metadata = {
  title: "Contact AIIJ",
  description:
    "Get in touch with the African Institute for Investigative Journalism (AIIJ) through our contact page. Whether you have inquiries, collaboration opportunities, or want to learn more about our work, our dedicated team is here to assist you. Find our contact information and reach out to us to join our mission in empowering investigative journalism, promoting media transparency, and driving positive change through impactful storytelling.",
};

const page = () => {
  return (
    <div className="py-14">
      <div className="w-full h-full max-h-[400px] after:absolute after:bg-igreen/80 after:w-full after:h-full after:top-0 after:left-0 after:z-20 isolate overflow-hidden relative">
        <Image
          src={"/images/hero-images/hero-4.jpeg"}
          alt={""}
          height={800}
          width={1000}
          className="h-full w-full max-h-[500px] object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-start z-30 max-w-[1280px]  mx-auto">
          <div className="text-4xl md:text-6xl font-bold text-center max-w-[600px] px-4 xl:px-2 flex flex-col items-start">
            <h1 className="flex flex-col text-[50px] md:text-[100px] text-left text-white leading-[1] tracking-wide">
              Contact us
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto bg-igreen/5 rounded-lg my-12 p-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8 justify-center">
          <div>
            <h2 className="text-left text-2xl font-bold mb-4 text-igreen">
              Location
            </h2>
            <div className="flex flex-col items-start gap-y-2 text-sm font-semibold">
              <span>Wakiso Uganda</span> <span>Plot 12163</span>
              <span>Kiira Bulindo RD</span>
              <span> Kiira Town Council</span>
            </div>
          </div>
          {/* <div className="bg-igreen w-[.5px] h-40" /> */}
          <div>
            <h2 className="text-start text-2xl font-bold mb-4 text-igreen">
              Contact
            </h2>
            <div className="flex flex-col items-start gap-y-2 text-sm font-semibold mb-8">
              <span>+256 789620727</span> <span>aiijuganda2020@gmail.com</span>
            </div>
            <a href={"mailto:aiijuganda2020@gmail.com"} className="mt-4">
              <button className=" bg-iyellow px-6 py-1.5 text-black rounded-full text-sm font-[500]">
                Send us an email
              </button>
            </a>
          </div>
        </div>
        <div className="py-14">
       
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255342.1031925535!2d32.329311998525576!3d0.4014965554880734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db73eae2b3a77%3A0x9575b33fa9ca7357!2sTotalEnergies%20Bulindo%20Service%20Station!5e0!3m2!1sen!2sug!4v1681122621436!5m2!1sen!2sug"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="600"
          height="450"
          //   frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          //   tabIndex="0"
        /> */}
      </div>
    </div>
  );
};

export default page;
