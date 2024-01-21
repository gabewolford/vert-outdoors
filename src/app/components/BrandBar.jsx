import Image from "next/image";
import { client } from "../../../sanity/lib/client";

export default async function BrandBar() {
  const brands = await client.fetch(`
  *[_type == "brands"] {
    'imageUrl': brandLogo.asset->url,
    name,
    order
  } | order(order asc)
`);

  return (
    <section data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
      <div className="flex flex-row flex-nowrap w-full overflow-x-auto items-center space-x-8 md:space-x-12 lg:space-x-10">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.imageUrl}
            alt={brand.name}
            className="lg:py-6 min-w-[115px] md:min-w[90px] lg:min-w-[80px] h-auto object-contain"
            width={300}
            height={45}
          />
        ))}
      </div>
    </section>
  );
}
