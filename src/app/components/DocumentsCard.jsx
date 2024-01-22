import Image from "next/image";

export default function DocumentsCard({ name, logoUrl, linksArray }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      class="flex flex-col w-full border-b-2 border-yellow-500 py-6"
    >
      <div class="flex flex-col md:flex-row text-xl gap-6">
        <div class="md:w-1/2 pt-2">
          <h3 class="hidden">{name}</h3>
          <Image
            class="w-[150px]"
            src={logoUrl}
            alt={name}
            height={57}
            width={375}
          />
        </div>
        <div class="md:w-1/2">
          <ul class="md:text-right">
            {linksArray.map((link, index) => (
              <li
                key={index}
                class="p-1 hover:text-blue-500 underline underline-offset-4 text-lg"
              >
                <a
                  href={link.file ? link.file : link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
