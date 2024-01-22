"use client";

import { useEffect } from "react";
import LinkButton from "./components/Buttons/LinkButton";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <h1 className="w-full text-center text-2xl md:text-4xl font-semibold">
        Page Not Found
      </h1>
      <div className="-mt-10 lg:-mt-6 w-full flex justify-center">
        <LinkButton linkTo="/" buttonText="Go home" />
      </div>
    </>
  );
}
