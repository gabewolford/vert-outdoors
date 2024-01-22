import Image from "next/image";
import LinkButton from "./Buttons/LinkButton";

export default function ImageRightTextLeft({
  heading,
  subheading,
  buttonText,
  linkTo,
  imageUrl,
  altText,
}) {
  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      className="flex flex-col lg:flex-row gap-6 lg:gap-8"
    >
      <div className="flex flex-col w-full gap-4 lg:w-1/2 justify-center order-last lg:order-first lg:px-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold">{heading}</h2>
            <h3 className="text-lg">{subheading}</h3>
          </div>
          <LinkButton buttonText={buttonText} linkTo={linkTo} />
        </div>
      </div>

      <div className="flex lg:w-1/2 justify-center">
        <Image
          src={imageUrl}
          alt={altText}
          height={660}
          width={660}
          className="object-contain right-image-border-radius"
        />
      </div>
    </section>
  );
}
