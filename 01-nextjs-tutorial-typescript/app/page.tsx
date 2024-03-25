import Link from "next/link";

export default function Home() {
  console.log("visible on server side");
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/about" className="text-2xl">
        about page
      </Link>
    </div>
  );
}
