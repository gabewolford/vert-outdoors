import Link from "next/link";

export default function DoubleButton({
  buttonTextLeft,
  leftLinkTo,
  buttonTextRight,
  rightLinkTo,
}) {
  return (
    <div className="flex flex-row w-fit border-2 border-yellow-500 rounded-lg">
      <Link
        href={leftLinkTo}
        target="_blank"
        className="w-fit px-4 py-2 hover:underline decoration-2 hover:underline-offset-4 text-md font-medium hover:bg-yellow-500 rounded-l-lg hover:rounded-l-lg hover:text-darkgreen-500 transition-all duration-200"
      >
        {buttonTextLeft}
      </Link>
      <div className="border border-yellow-500"></div>
      <Link
        href={rightLinkTo}
        className="w-fit px-4 py-2 hover:underline decoration-2 hover:underline-offset-4 text-md font-medium hover:bg-yellow-500 rounded-r-lg hover:rounded-r-lg hover:text-darkgreen-500 transition-all duration-200"
      >
        {buttonTextRight}
      </Link>
    </div>
  );
}
