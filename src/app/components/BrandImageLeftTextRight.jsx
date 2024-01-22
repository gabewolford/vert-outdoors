import DoubleButton from "./Buttons/DoubleButton";
import Image from "next/image";

export default function BrandImageLeftTextRight({
  brandName,
  imageUrl,
  brandLogoUrl,
  heading,
  paragraph,
  paragraph2,
  websiteUrl,
}) {
  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      className="flex flex-col md:flex-row gap-8 md:gap-16"
    >
      <div className="flex flex-col gap-6 order-1 md:order-0 md:w-1/2 max-h-fit my-auto">
        <h2 className="hidden">{brandName}</h2>
        <Image
          src={brandLogoUrl}
          alt={brandName}
          width={375}
          height={57}
          className="max-w-[185px] md:max-w-[250px]"
        />
        <h3 className="md:text-xl font-medium">{heading}</h3>
        <div className="flex flex-col gap-4">
          <p className="text-sm">{paragraph}</p>
          {paragraph2 && <p className="text-sm">{paragraph2}</p>}
        </div>
        <DoubleButton
          buttonTextLeft="Visit Website"
          buttonTextRight="View Documents"
          leftLinkTo={websiteUrl}
          rightLinkTo="/documents"
        />
      </div>
      <div className="flex items-center md:w-1/2 order-0 md:order-1">
        <Image src={imageUrl} alt={brandName} width={750} height={650} />
      </div>
    </section>
  );
}
