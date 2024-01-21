import Link from "next/link";

export default function LinkButton({ buttonText, linkTo }) {
  return (
    <Link
      className="w-fit px-4 py-2 bg-[#2655BB] hover:bg-[#3D67C3] rounded-full text-white text-lg font-medium"
      href={linkTo}
    >
      {buttonText}
    </Link>
  );
}
