import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <h1 className="w-full text-center text-2xl md:text-4xl font-semibold">
        Contact Us
      </h1>
      <div class="flex flex-col w-full -mt-10 lg:-mt-6">
        <ContactForm />
      </div>
    </>
  );
}
