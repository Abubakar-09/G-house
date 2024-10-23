// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="bg-red-500">
      main page - <Link href={'about'}>Go to About Page</Link>
    </div>
    </>
  );
}
