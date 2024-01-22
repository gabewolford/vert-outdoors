import Image from "next/image";
import LinkButton from "./Buttons/LinkButton";

export default function Hero({
  heading,
  subheading,
  linkTo,
  buttonText,
  imageUrl,
  altText,
}) {
  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      className="flex flex-col lg:flex-row gap-6 z-10"
    >
      <div className="flex flex-col order-last lg:order-first w-full lg:w-2/5 justify-center text-yellow-500 gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-7xl font-semibold">{heading}</h1>
          <h2 className="text-lg md:text-2xl lg:text-xl font-medium">
            {subheading}
          </h2>
        </div>
        <LinkButton linkTo={linkTo} buttonText={buttonText} />
      </div>
      <div className="flex w-full lg:w-3/5 justify-center items-center">
        <Image
          src={imageUrl}
          alt={altText}
          height={747}
          width={1050}
          className="object-contain"
          priority={true}
        />
      </div>
    </section>
  );
}
