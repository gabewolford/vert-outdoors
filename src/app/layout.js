import { Cabin } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import "animate.css";
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
        <main className="p-4 md:p-6">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
