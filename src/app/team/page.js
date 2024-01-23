import { client } from "../../../sanity/lib/client";
import TeamCard from "../components/TeamCard";

export const metadata = {
  title: "Our Team | VERT Outdoors",
  description:
    "Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  keywords:
    "Outdoors, apparel, ski, bike, snowboard, hiking, cycling, skiing, gear, sales, outdoor sales, smartwool, helly hansen, clif bar, camelbak, biolite, helinox, therabody",
  openGraph: {
    title: "Our Team | VERT Outdoors",
    description:
      "Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
    siteName: "VERT Outdoors",
    type: "website",
    locale: "en_US",
    url: "https://vertoutdoors.com/team",
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

export default async function TeamPage() {
  const data = await client.fetch(`
    *[_type == "pages" && title == "Team"] {
      pageItems[] {
        name, 
        bio,
        position,
        region,
        email,
        "imageUrl": photo.asset->url,
        
      }
    }
  `);

  const teamArray = data[0].pageItems;

  return (
    <>
      <h1 className="w-full text-center text-2xl md:text-4xl font-semibold">
        Meet Team VERT
      </h1>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-10 lg:-mt-6">
        {teamArray.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            imageUrl={member.imageUrl}
            bio={member.bio}
            position={member.position}
            region={member.region}
            email={member.email}
          />
        ))}
      </section>
    </>
  );
}
