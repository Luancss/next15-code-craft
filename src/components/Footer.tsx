import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-gray-800/50 w-full flex items-center justify-center">
      <div className="mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-gray-400">
          <Image
            alt="Luancss"
            src="https://avatars.githubusercontent.com/u/104950187?v=4"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-gray-300">Built for</p>
          <Link
            href="https://github.com/Luancss"
            target="_blank"
            className="text-zinc-400 underline"
          >
            Luancss.
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
