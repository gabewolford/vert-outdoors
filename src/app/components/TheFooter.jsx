"use client";

import Link from "next/link";
import Image from "next/image";
import vertLogo from "../../../public/images/vert-logo.svg";
import { PopupButton } from "@typeform/embed-react";

export default function TheFooter() {
  const formID = process.env.NEXT_PUBLIC_TYPEFORM_PROJECT_ID;

  return (
    <footer className="absolute bottom-0 h-[300px] lg:h-[200px] w-full bg-darkbrown-500 p-4 md:p-6 text-center flex flex-col gap-6">
      <div className="flex flex-col h-full lg:flex-row gap-6 items-center justify-between">
        <Link href="/">
          <Image src={vertLogo} alt="VERT logo" height={75} />
        </Link>
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          <Link href="/brands" className="hover:text-blue-hover">
            Brands
          </Link>
          <Link href="/team" className="hover:text-blue-hover">
            Team
          </Link>
          <Link href="/documents" className="hover:text-blue-hover">
            Documents
          </Link>
          <PopupButton id={formID} className="hover:text-blue-hover">
            Contact
          </PopupButton>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <h6 className="text-xs">© 2024 VERT Outdoors. All Rights Reserved.</h6>
      </div>
    </footer>
  );
}
