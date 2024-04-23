import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#040749] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image 
          src="smoki.svg" 
          alt="ss"
          width="200"
          height="200"
        />
      </div>
    </main>
  );
}
