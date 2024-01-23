import { client } from "../../../sanity/lib/client";
import DocumentsCard from "../components/DocumentsCard";

export const metadata = {
  title: "Document Center | VERT Outdoors",
  description:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  keywords:
    "Outdoors, apparel, ski, bike, snowboard, hiking, cycling, skiing, gear, sales, outdoor sales, smartwool, helly hansen, clif bar, camelbak, biolite, helinox, therabody",
  openGraph: {
    title: "Document Center | VERT Outdoors",
    description:
      "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
    siteName: "VERT Outdoors",
    type: "website",
    locale: "en_US",
    url: "https://vertoutdoors.com/documents",
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

export default async function DocumentsPage() {
  const data = await client.fetch(`
    *[_type == "pages" && title == "Documents"] {
      pageItems[] {
        name,
        "logoUrl": logo.asset->url,
        "linksArray": links[] {
          "file": file.asset->url,
          url,
          text,
        },
      }
    }
  `);

  const documentsArray = data[0].pageItems;

  return (
    <>
      <h1 className="w-full text-center text-2xl md:text-4xl font-semibold">
        Document Center
      </h1>
      <div className="flex flex-col w-full -mt-10 lg:-mt-6">
        {documentsArray.map((brand, index) => (
          <DocumentsCard
            key={index}
            name={brand.name}
            logoUrl={brand.logoUrl}
            linksArray={brand.linksArray}
          />
        ))}
      </div>
    </>
  );
}
