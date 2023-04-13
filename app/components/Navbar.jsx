import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-gray-900 text-white px-16 py-3 text-lg">
      <Link href={"/"}>Movie Mania</Link>
    </div>
  );
}
