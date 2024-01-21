import Image from "next/image";
import LinkButton from "./Buttons/LinkButton";
import { client } from "../../../sanity/lib/client";

export default async function Hero() {
  const data = await client.fetch(`
    *[_type == "page" && title == "Home Page"] {
      'heroData': pageBuilder[0]{
        'imageUrl': image.asset->url,
        'altText': image.altText,
        linkTo,
        subtext,
        ctaText,
        headerText,
      }
    }
  `);

  const heroData = data[0]?.heroData;

  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      className="flex flex-col lg:flex-row gap-6 z-10"
    >
      <div className="flex flex-col order-last lg:order-first w-full lg:w-2/5 justify-center text-yellow-500 gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl font-semibold">
            {heroData.headerText}
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-xl font-medium">
            {heroData.subtext}
          </h2>
        </div>
        <LinkButton linkTo={heroData.linkTo} buttonText={heroData.ctaText} />
      </div>
      <div className="flex w-full lg:w-3/5 justify-center items-center">
        <Image
          src={heroData.imageUrl}
          alt={heroData.altText}
          height={747}
          width={1050}
          className="object-contain"
          priority={true}
        />
      </div>
    </section>
  );
}
