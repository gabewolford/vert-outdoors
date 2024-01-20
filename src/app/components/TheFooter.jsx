import Link from "next/link";
import Image from "next/image";
import vertLogo from "../../../public/images/vert-logo.svg";

export default function TheFooter() {
  return (
    <footer class="absolute bottom-0 h-[300px] md:h-[200px] w-full bg-darkbrown-500 p-4 md:p-6 text-center flex flex-col gap-6">
      <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <Link href="/">
          <Image src={vertLogo} alt="VERT logo" height={75} />
        </Link>
        <div class="flex flex-col lg:flex-row lg:space-x-10">
          <Link href="/brands" class="hover:text-blue-hover">
            Brands
          </Link>
          <Link href="/team" class="hover:text-blue-hover">
            Team
          </Link>
          <Link href="/documents" class="hover:text-blue-hover">
            Documents
          </Link>
          <Link href="/contact" class="hover:text-blue-hover">
            Contact
          </Link>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <h6 class="text-xs">© 2024 VERT Outdoors. All Rights Reserved.</h6>
      </div>
    </footer>
  );
}
