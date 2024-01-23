import { Cabin } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos/dist/aos.css";
import AOSLoader from "./components/utils/AOSLoader";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "VERT Outdoors",
  description:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  keywords:
    "Outdoors, apparel, ski, bike, snowboard, hiking, cycling, skiing, gear, sales, outdoor sales",
  openGraph: {
    title: "VERT Outdoors",
    description:
      "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
    siteName: "VERT Outdoors",
    type: "website",
    locale: "en_US",
    url: "https://vertoutdoors.com",
    images: [
      {
        url: "https://vert-outdoors.vercel.app/images/og-image.png",
        width: 800,
        height: 800,
        alt: "VERT Outdoors",
      },
    ],
  },
  images: [
    {
      url: "https://vert-outdoors.vercel.app/images/og-image.png",
      width: 800,
      height: 800,
      alt: "VERT Outdoors",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cabin.className} text-yellow-500 bg-darkgreen-500 min-h-dvh min-w-full flex flex-col relative`}
      >
        <TheHeader />
        <main className="p-6 md:px-12 md:pb-12 md:pt-6 lg:px-16 lg:pb-10 lg:pt-6 xl:px-20 xl:pt-8 2xl:px-48 flex flex-col mx-auto gap-20 min-w-full max-w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mb-[300px] lg:mb-[200px]">
          {children}
        </main>
        <TheFooter />
        <AOSLoader />
      </body>
    </html>
  );
}
