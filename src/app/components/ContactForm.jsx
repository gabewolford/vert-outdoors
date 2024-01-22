"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_rg1jq3d",
        "vert_outdoors_contact",
        form.current,
        "GLjJJKxGwW-an5Tep"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );

    e.target.reset();
    router.push("/contact/confirmation");
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full lg:w-1/2 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2"
    >
      <p class="col-span-2 text-sm text-right">* All fields are required</p>

      <div className="col-span-2 md:col-span-1">
        <label className="text-xs">
          First Name <span>*</span>
        </label>
        <input
          type="text"
          placeholder="First name"
          name="first_name"
          className="border-2 border-yellow-500 rounded-lg p-1 w-full"
          required
        />
      </div>

      <div className="col-span-2 md:col-span-1">
        <label className="text-xs">
          Last Name <span>*</span>
        </label>
        <input
          type="text"
          placeholder="Last name"
          name="last_name"
          className="border-2 border-yellow-500 rounded-lg p-1 w-full"
          required
        />
      </div>

      <div className="col-span-2">
        <label className="text-xs">
          Email <span>*</span>
        </label>
        <input
          type="email"
          placeholder="Email address"
          name="user_email"
          className="border-2 border-yellow-500 rounded-lg p-1 w-full"
          required
        />
      </div>

      <div className="col-span-2">
        <label className="text-xs">
          Subject <span>*</span>
        </label>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required="true"
          className="border-2 border-yellow-500 rounded-lg p-1 w-full"
        />
      </div>

      <div className="col-span-2">
        <label className="text-xs">
          Message <span>*</span>
        </label>
        <textarea
          name="user_message"
          className="border-2 border-yellow-500 rounded-lg p-1 min-h-[150px] h-max w-full mt-1 text-darkgreen-500"
          maxLength={500}
          placeholder="Your message here"
          required
        />
      </div>

      <div className="flex justify-end col-span-2">
        <button
          className="flex h-10 px-4 py-2 items-center rounded-full bg-blue-500 hover:bg-blue-hover text-white-500 font-medium"
          type="submit"
          value="Send"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
