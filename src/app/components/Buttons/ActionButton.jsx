export default function ActionButton({ buttonText, onClick }) {
  return (
    <button
      className="w-fit px-4 py-2 bg-[#2655BB] hover:bg-[#3D67C3] rounded-full text-white text-lg font-medium"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
