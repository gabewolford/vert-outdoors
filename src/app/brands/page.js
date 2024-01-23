import { client } from "../../../sanity/lib/client";
import BrandImageLeftTextRight from "../components/BrandImageLeftTextRight";
import BrandImageRightTextLeft from "../components/BrandImageRightTextLeft";

export const metadata = {
  title: "Brands | VERT Outdoors",
  description:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  keywords:
    "Outdoors, apparel, ski, bike, snowboard, hiking, cycling, skiing, gear, sales, outdoor sales, smartwool, helly hansen, clif bar, camelbak, biolite, helinox, therabody",
  openGraph: {
    title: "Brands | VERT Outdoors",
    description:
      "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
    siteName: "VERT Outdoors",
    type: "website",
    locale: "en_US",
    url: "https://vertoutdoors.com/brands",
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

export default async function BrandsPage() {
  const data = await client.fetch(`
    *[_type == "pages" && title == "Brands"] {
      pageItems[] {
        "brandName": name,
        "websiteUrl": website,
        "imageUrl": featuredImage.asset->url,
        "brandLogoUrl": brandLogo.asset->url,
        "heading": tagline,
        paragraph,
        paragraph2,
        order,
      }
    }
  `);

  const brandArray = data[0].pageItems;

  return (
    <>
      {brandArray.map((brand, index) =>
        index % 2 === 0 ? (
          <BrandImageLeftTextRight
            key={index}
            brandName={brand.brandName}
            brandLogoUrl={brand.brandLogoUrl}
            imageUrl={brand.imageUrl}
            websiteUrl={brand.websiteUrl}
            heading={brand.heading}
            paragraph={brand.paragraph}
            paragraph2={brand.paragraph2}
          />
        ) : (
          <BrandImageRightTextLeft
            key={index}
            brandName={brand.brandName}
            brandLogoUrl={brand.brandLogoUrl}
            imageUrl={brand.imageUrl}
            websiteUrl={brand.websiteUrl}
            heading={brand.heading}
            paragraph={brand.paragraph}
            paragraph2={brand.paragraph2}
          />
        )
      )}
    </>
  );
}
