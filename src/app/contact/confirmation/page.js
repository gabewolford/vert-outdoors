import Image from "next/image";
import hikingImage from "../../../../public/images/contact-confirmation.png";

export default function ConfirmationPage() {
  return (
    <>
      <h1 className="w-full text-center text-2xl md:text-4xl font-semibold">
        Contact Confirmation
      </h1>
      <div className="-mt-10 lg:-mt-6 text-center w-full md:w-1/2 mx-auto flex flex-col gap-8">
        <p>
          Thank you for getting in touch with us! We have received your message
          and will get back to you as soon as possible.
        </p>
        <Image
          src={hikingImage}
          alt="hiking image"
          placeholder="blur"
          className="w-full mx-auto"
        />
      </div>
    </>
  );
}
