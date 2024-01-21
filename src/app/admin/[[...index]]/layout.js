export default function Layout({ children }) {
  return (
    <div className="absolute top-0 left-0 w-full h-fit z-[9999]">
      {children}
    </div>
  );
}
