import Image from "next/image";
import hikingImage from "../../../../public/images/contact-confirmation.png";

export const metadata = {
  title: "Contact Confirmation | VERT Outdoors",
  description:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  keywords:
    "Outdoors, apparel, ski, bike, snowboard, hiking, cycling, skiing, gear, sales, outdoor sales, smartwool, helly hansen, clif bar, camelbak, biolite, helinox, therabody",
  openGraph: {
    title: "Contact Confirmation | VERT Outdoors",
    description:
      "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
    siteName: "VERT Outdoors",
    type: "website",
    locale: "en_US",
    url: "https://vertoutdoors.com/contact/confirmation",
    images: [
      {
        url: "https://vert-outdoors-vercel.app/images/og-image.png",
        width: 800,
        height: 800,
        alt: "VERT Outdoors",
      },
    ],
  },
  images: [
    {
      url: "https://vert-outdoors-vercel.app/images/og-image.png",
      width: 800,
      height: 800,
      alt: "VERT Outdoors",
    },
  ],
};

export default function ConfirmationPage() {
  return (
    <>
      <h1 className="w-full text-center text-2xl md:text-4xl font-semibold">
        Contact Confirmation
      </h1>
      <div className="-mt-10 lg:-mt-6 text-center w-full md:w-1/2 mx-auto flex flex-col gap-8">
        <p>
          Thank you for getting in touch with us! We have received your message
          and will get back to you as soon as possible.
        </p>
        <Image
          src={hikingImage}
          alt="hiking image"
          placeholder="blur"
          className="w-full mx-auto"
        />
      </div>
    </>
  );
}
