import { client } from "../../sanity/lib/client";
import Hero from "./components/Hero";
import BrandBar from "./components/BrandBar";
import ImageLeftTextRight from "./components/ImageLeftTextRight";
import ImageRightTextLeft from "./components/ImageRightTextLeft";

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

export default async function HomePage() {
  const data = await client.fetch(`
    *[_type == "pages" && title == "Home"] {
      'hero': pageItems[0]{
        'imageUrl': image.asset->url,
        'altText': image.altText,
        heading,
        subheading,
        linkTo,
        buttonText,
      },
      'brands': pageItems[1].images[] {
        'imageUrl': logo.asset->url,
        name,
        order
      },
      'section1': pageItems[2] {
        'imageUrl': image.asset->url,
        'altText': image.altText,
        heading,
        subheading,
        linkTo,
        buttonText
      },
      'section2': pageItems[3] {
        'imageUrl': image.asset->url,
        'altText': image.altText,
        heading,
        subheading,
        linkTo,
        buttonText
      },
    }
  `);

  const heroData = data[0]?.hero;
  const brandData = data[0]?.brands;
  const section1 = data[0]?.section1;
  const section2 = data[0]?.section2;

  return (
    <>
      <Hero
        imageUrl={heroData.imageUrl}
        altText={heroData.altText}
        linkTo={heroData.linkTo}
        subheading={heroData.subheading}
        buttonText={heroData.buttonText}
        heading={heroData.heading}
      />

      <BrandBar brands={brandData} />

      <ImageLeftTextRight
        imageUrl={section1.imageUrl}
        altText={section1.altText}
        linkTo={section1.linkTo}
        subheading={section1.subheading}
        buttonText={section1.buttonText}
        heading={section1.heading}
      />

      <ImageRightTextLeft
        imageUrl={section2.imageUrl}
        altText={section2.altText}
        linkTo={section2.linkTo}
        subheading={section2.subheading}
        buttonText={section2.buttonText}
        heading={section2.heading}
      />
    </>
  );
}
