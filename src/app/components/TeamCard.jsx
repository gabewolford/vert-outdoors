import Image from "next/image";

export default function TeamCard({
  name,
  imageUrl,
  position,
  bio,
  region,
  email,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      data-aos-offset="0"
      className="flex flex-col bg-[#383E38] gap-4 p-4 md:p-6 rounded-2xl h-full"
    >
      <div className="flex flex-row gap-4 items-center">
        <div className="w-1/3 md:w-2/5">
          <Image
            src={imageUrl}
            alt={name}
            height={240}
            width={240}
            className="right-content-border-radius"
          />
        </div>

        <div className="flex flex-col w-2/3 md:w-3/5 gap-2 my-auto">
          <h3 className="text-xl md:text-2xl font-semibold">{name}</h3>
          <h4 className="text-sm bg-[#1f2c1e] w-fit px-2 py-1 rounded-md">
            {position}
          </h4>
          <h5 className="text-xs md:text-sm">Regions: {region}</h5>
          <h5 className="text-xs md:text-sm">
            Contact: <a href={`mailto:${email}`}>{email}</a>
          </h5>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm md:text-base">{bio}</h3>
      </div>
    </div>
  );
}
