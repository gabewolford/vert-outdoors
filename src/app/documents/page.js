import { client } from "../../../sanity/lib/client";
import DocumentsCard from "../components/DocumentsCard";

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
      <div class="flex flex-col w-full -mt-10 lg:-mt-6">
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
