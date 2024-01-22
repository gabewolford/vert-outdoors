import { client } from "../../../sanity/lib/client";
import TeamCard from "../components/TeamCard";

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
