import Link from "next/link";
import { RiYoutubeLine, RiDiscordLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "black", color: "white" }}
      className="font-serif self-stretch bg-black flex flex-col items-center text-center pt-28 pb-6 px-8"
    >
      <img
        className="w-56 mb-4"
        src="/small-logo-white.png"
        atl="boy that feels logo"
      />
      <p className=" text-sm max-w-xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex items-center gap-4 text-4xl">
        <RiYoutubeLine />
        <RiDiscordLine />
      </div>
      <div className="mt-16 flex flex-col self-stretch items-center text-xs md:flex-row md:justify-between">
        <div className="flex items-center divide-x mb-4 md:mb-0">
          <Link href="/terms">
            <p className=" hover:opacity-50 transition-all hover:cursor-pointer pr-3">
              Terms of Use
            </p>
          </Link>
          <Link href="/terms">
            <p className="hover:opacity-50 transition-all hover:cursor-pointer pl-3">
              Privacy Policy
            </p>
          </Link>
        </div>

        <p>
          Copyright 2021 <sup>©</sup> boythatfeels.com
        </p>
      </div>
    </footer>
  );
}
