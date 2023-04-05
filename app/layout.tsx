import "./globals.css";
import localFont from "@next/font/local";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "AIIJ - Homepage",
  description:
    "AIIJ is an organization dedicated to fostering investigative journalism in Africa, with a focus on Uganda. We promote impactful media practices rooted in human rights and social justice, aiming to inform public discourse and create a supportive environment for passionate investigative journalists.",
  keywords: [
    "AIIJ",
    "Africa best journalists",
    "African Institute",
    "Journalism grants",
    "iRoom investigative stories",
    "iRoom investigative articles",
    "journalism and mass communication",
    "mass communication and journalism",
    "investigative journalism interview questions",
    "African Institute of Investigative Journalism",
  ],
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    url: "https://www.theiroom.com",
    siteName: "AIIJ",
    title: "AIIJ - Homepage",
    images: [
      {
        url: "https://www.theiroom.com/og.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
  },
  creator: "Shafic Zziwa",
  publisher: "African Institute of Investigative Journalism (AIIJ)",
  themeColor: "#13594D",
  authors: [
    {
      name: "Shafic Zziwa",
      url: "https://dev-xapis.netlify.app",
    },
    { name: "Tateno Pictures Team", url: "https://www.tatenopictures.com" },
  ],
};

const bebas = localFont({
  src: [
    {
      path: "../public/fonts/BebasNeue-Regular.ttf",
    },
  ],
  variable: "--font-heading",
});

const open_sans = localFont({
  variable: "--font-body",
  src: [
    {
      path: "../public/fonts/OpenSans-VariableFont_wdth,wght.ttf",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.variable} ${bebas.variable} font-body bg-igren/[.02] h-full min-h-screen flex flex-col justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
