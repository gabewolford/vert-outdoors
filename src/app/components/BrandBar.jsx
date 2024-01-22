import Image from "next/image";

export default function BrandBar({ brands }) {
  return (
    <section
      data-aos="fade-in"
      data-aos-once="true"
      data-aos-duration="800"
      data-aos-offset="0"
    >
      <div className="grid gap-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-7  items-center">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.imageUrl}
            alt={brand.name}
            className="col-span-1 lg:py-6 object-contain"
            width={300}
            height={45}
          />
        ))}
      </div>
    </section>
  );
}
