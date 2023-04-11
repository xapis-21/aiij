// "use client";

// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { useState } from "react";
// import { client } from "@/lib/sanity.client";
// import { useUser } from "@clerk/nextjs";
// import { SignedIn,SignedOut } from "@clerk/nextjs";
// import SigninBtn from "./SigninBtn";
// import NothingHere from "./NothingHere";

// const DonationForm = () => {
//     const [donateAmount, setDonateAmount] = useState(10);
//     const { isLoaded, isSignedIn, user } = useUser();
//     const [success, setSuccess] = useState(false);
    

//   const config: any = {
//     public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
//     tx_ref: Date.now(),
//     amount: donateAmount,
//     currency: "USD",
//     payment_options: "card",
//     customer: {
//       email: user?.primaryEmailAddress?.emailAddress,
//       name: user?.fullName,
//     },
//     customizations: {
//       title: "Support iRoom",
//       description: "Help us tell the stories that matter",
//       logo: "/images/logo.png",
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//     const handlePayment = (e:any) => {
//         e.preventDefault();
//         client.createIfNotExists({
//             _type: "user",
//             _id: user?.id,
//             name: user?.fullName,
//             email: user?.primaryEmailAddress?.emailAddress,
//             image_url: user?.profileImageUrl,
//             phone: user?.primaryPhoneNumber?.phoneNumber,
//         }).then((res) => {
//              handleFlutterPayment({
//                callback: (response: any) => {
//                      console.log(response);
//                      if (response.status === "successful") {
//                          setSuccess(true);
//                         }
//                  closePaymentModal(); // this will close the modal programmatically
//                },
//                onClose: () => {},
//              });
//         });
//   };
    
//   return (
//     <div className="my-2 py-8 px-4 bg-igreen/10 rounded-md">
//       {!success ? (
//         <div className="" id="donate">
//           <h1 className="text-base font-semibold mb-2">
//             We have a favour to ask
//           </h1>
//           <p className="text-sm mb-2">
//             To keep investigative journalism alive and enable us to continue
//             sharing more stories, we kindly request your support for the iRoom
//             with a one-time donation. Your contribution, no matter the amount,
//             is vital in powering our reporting and sustaining it for the years
//             to come. You can make your donation quickly and easily, and be
//             assured that you are making a significant impact in support of open,
//             independent journalism. Thank you for considering this opportunity
//             to support our work.
//           </p>
//           <form action="" className="py-4" onSubmit={handlePayment}>
//             <div className="grid grid-cols-4 gap-4">
//               <input
//                 type="button"
//                 name=""
//                 id=""
//                 value={"USD 10"}
//                 onClick={() => setDonateAmount(10)}
//                 className={` border border-gray-500 text-xs md:text-sm py-2.5 font-bold rounded-full duration-300 ${
//                   donateAmount === 10 ? "bg-igreen text-white" : "text-gray-500"
//                 }`}
//               />
//               <input
//                 type="button"
//                 name=""
//                 id=""
//                 value={"USD 50"}
//                 onClick={() => setDonateAmount(50)}
//                 className={`border border-gray-500 text-xs md:text-sm text-gray-500 py-2.5 font-bold rounded-full duration-300 ${
//                   donateAmount === 50 ? "bg-igreen text-white" : "text-gray-500"
//                 }`}
//               />
//               <input
//                 type="button"
//                 name=""
//                 id=""
//                 value={"USD 100"}
//                 onClick={() => setDonateAmount(100)}
//                 className={`border border-gray-500 text-xs md:text-sm text-gray-500 py-2.5 font-bold rounded-full duration-300 ${
//                   donateAmount === 100
//                     ? "bg-igreen text-white"
//                     : "text-gray-500"
//                 }`}
//               />
//               <input
//                 type={"number"}
//                 name=""
//                 id=""
//                 placeholder={"other"}
//                 onChange={(e) => setDonateAmount(parseInt(e.target.value))}
//                 className={`border pl-4 grid place-items-center text-xs md:text-sm  py-2.5 font-bold rounded-full duration-300 ${
//                   ![10, 50, 100].includes(donateAmount)
//                     ? "border-igreen text-igreen"
//                     : "border-gray-500 text-gray-500"
//                 }`}
//               />
//             </div>
//             <SignedIn>
//               <button
//                 type="submit"
//                 className="bg-iyellow/80 hover:bg-iyellow duration-300 py-2.5 text-gray-800 font-semibold rounded-full mt-4 w-full"
//               >
//                 Support Us with ${donateAmount} &#8594;
//               </button>
//             </SignedIn>
//           </form>
//           <SignedOut>
//             <SigninBtn
//               text={`Continue`}
//               url={window.location.pathname + "#donate"}
//               design={
//                 "bg-iyellow/80 hover:bg-iyellow font-semibold text-gray-800 mt-4 w-full"
//               }
//             />
//           </SignedOut>
//         </div>
//       ) : (
//         <h1 className=" text-igreen font-bold">Donation successful, Thanks!</h1>
//       )}
//     </div>
//   );
// };

// export default DonationForm;
