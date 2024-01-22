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
  description: "Description here",
  keywords: "Keywords here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cabin.className} text-yellow-500 bg-darkgreen-500 min-h-dvh min-w-full flex flex-col relative`}
      >
        <TheHeader />
        <main className="py-8 px-8 lg:px-16 lg:py-10 xl:p-20 mx-auto 2xl:p-48 flex flex-col gap-16 min-w-full max-w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mb-[300px] lg:mb-[200px]">
          {children}
        </main>
        <TheFooter />
        <AOSLoader />
      </body>
    </html>
  );
}
