"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import vertLogo from "../../../public/images/vert-logo.svg";
import menuIcon from "../../../public/images/menu-icon.png";
import closeIcon from "../../../public/images/close-icon.png";

export default function TheHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 md:p-6">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/">
          <Image src={vertLogo} height={60} alt="VERT logo" priority={true} />
        </Link>

        <div className={isMobileMenuOpen ? "hidden" : "md:hidden"}>
          <button onClick={toggleMobileMenu}>
            <Image src={menuIcon} alt="Menu" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-8 right-4 z-[9999] text-white animate__animated animate__rotateIn"
          >
            <Image src={closeIcon} alt="Close" />
          </button>
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-darkbrown-500 bg-opacity-95 z-[9000] animate__animated animate__slideInDown">
            <div className="flex flex-col h-full justify-center space-y-12 items-center">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="hover:bg-blue-hover text-xl"
              >
                Home
              </Link>
              <Link
                href="/brands"
                onClick={toggleMobileMenu}
                className="hover:bg-blue-hover text-xl"
              >
                Brands
              </Link>
              <Link
                href="/team"
                onClick={toggleMobileMenu}
                className="hover:bg-blue-hover text-xl"
              >
                Team
              </Link>
              <Link
                href="/documents"
                onClick={toggleMobileMenu}
                className="hover:bg-blue-hover text-xl"
              >
                Documents
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="hover:bg-blue-hover text-xl"
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        <div className="hidden md:block flex-row space-x-10">
          <Link href="/brands" className="hover:text-blue-hover">
            Brands
          </Link>
          <Link href="/team" className="hover:text-blue-hover">
            Team
          </Link>
          <Link href="/documents" className="hover:text-blue-hover">
            Documents
          </Link>
          <Link
            href="/contact"
            className="inline-block px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-hover"
          >
            Get In Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
