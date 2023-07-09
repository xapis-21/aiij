"use client";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";


const DonationForm = () => {
  const [donateAmount, setDonateAmount] = useState(10);
  // const { isLoaded, isSignedIn, user } = useUser();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);

  const config: any = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: donateAmount,
    currency: "USD",
    payment_options: "card",
    customer: {
      email: email && email,
      name: name && name,
    },
    customizations: {
      title: "Support iRoom",
      description: "Help us tell the stories that matter",
      logo: "/images/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = (e: any) => {
    e.preventDefault();

    handleFlutterPayment({
      callback: (response: any) => {
        console.log(response);
        if (response.status === "successful") {
          setSuccess(true);
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  return (
    <div className="my-2 py-8 px-4 bg-igreen/10 rounded-md">
      {!success ? (
        <div className="" id="donate">
          <h1 className="text-base font-semibold mb-2">
            We have a favour to ask
          </h1>
          <p className="text-sm mb-2">
            To keep investigative journalism alive and enable us to continue
            sharing more stories, we kindly request your support for the institute
            with a one-time donation. Your contribution, no matter the amount,
            is vital in powering our reporting and sustaining it for the years
            to come. You can make your donation quickly and easily, and be
            assured that you are making a significant impact in support of open,
            independent journalism. Thank you for considering this opportunity
            to support our work.
          </p>
          <form action="" className="py-4" onSubmit={handlePayment}>
            <div className="grid grid-cols-4 gap-4">
              <input
                type="button"
                name=""
                id=""
                value={"USD 10"}
                onClick={() => setDonateAmount(10)}
                className={` border border-gray-500 text-xs md:text-sm py-2.5 font-bold rounded-full duration-300 ${
                  donateAmount === 10 ? "bg-igreen text-white" : "text-gray-500"
                }`}
              />
              <input
                type="button"
                name=""
                id=""
                value={"USD 50"}
                onClick={() => setDonateAmount(50)}
                className={`border border-gray-500 text-xs md:text-sm text-gray-500 py-2.5 font-bold rounded-full duration-300 ${
                  donateAmount === 50 ? "bg-igreen text-white" : "text-gray-500"
                }`}
              />
              <input
                type="button"
                name=""
                id=""
                value={"USD 100"}
                onClick={() => setDonateAmount(100)}
                className={`border border-gray-500 text-xs md:text-sm text-gray-500 py-2.5 font-bold rounded-full duration-300 ${
                  donateAmount === 100
                    ? "bg-igreen text-white"
                    : "text-gray-500"
                }`}
              />
              <input
                type={"number"}
                name=""
                id=""
                placeholder={"other"}
                onChange={(e) => setDonateAmount(parseInt(e.target.value))}
                className={`border pl-4 grid place-items-center text-xs md:text-sm  py-2.5 font-bold rounded-full duration-300 ${
                  ![10, 50, 100].includes(donateAmount)
                    ? "border-igreen text-igreen"
                    : "border-gray-500 text-gray-500"
                }`}
              />
            </div>
            <div className="gap-4 flex flex-col md:flex-row py-4">
              <input
                type={"text"}
                name=""
                id=""
                placeholder={"Enter full name"}
                onChange={(e) => setName(e.target.value)}
                className={`border pl-4 grid place-items-center text-xs md:text-sm  py-2.5 font-bold rounded-full duration-300 w-full `}
                required
              />
              <input
                type={"email"}
                name="email"
                id="email"
                placeholder={"Enter email Address"}
                onChange={(e) => setEmail(e.target.value)}
                className={`border pl-4 grid place-items-center text-xs md:text-sm  py-2.5 font-bold rounded-full duration-300 w-full`}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-iyellow/80 hover:bg-iyellow duration-300 py-2.5 text-gray-800 font-semibold rounded-full mt-4 w-full"
            >
              Support Us with ${donateAmount} &#8594;
            </button>
          </form>
        </div>
      ) : (
        <h1 className=" text-igreen font-bold">Donation successful, Thanks!</h1>
      )}
    </div>
  );
};

export default DonationForm;
