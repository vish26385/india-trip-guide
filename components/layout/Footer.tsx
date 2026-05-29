import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          {/* <h3 className="text-2xl font-black">
            India<span className="text-orange-400">Trip</span>Guide
          </h3> */}
          <Image
            src="/logo-footer.svg"
            alt="IndiaTripGuide"
            width={260}
            height={52}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
            Premium India travel guides, destination ideas, itineraries, and
            practical travel tips for smarter trips.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Explore</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <Link href="/destinations" className="block hover:text-white">
              Destinations
            </Link>
            <Link href="/itineraries" className="block hover:text-white">
              Itineraries
            </Link>
            <Link href="/blog" className="block hover:text-white">
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <Link href="/privacy-policy" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block hover:text-white">
              Terms
            </Link>
            <Link href="/disclaimer" className="block hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>        
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} IndiaTripGuide. All rights reserved.
        </div>
      </div>

    </footer>
  );
}