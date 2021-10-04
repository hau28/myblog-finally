import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../public/small-logo.png";
import logoWhite from "../public/small-logo-white.png";
import { useMediaQuery } from "react-responsive";

export default function Header({ homepage, className }) {
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <header
      className={
        "z-10 w-full flex justify-between items-center mx-auto px-6 py-6 sm:px-16 " +
        className
      }
    >
      <Link href="/">
        <div className="w-48">
          <Image
            className="w-full h-full cursor-pointer object-cover"
            src={!isLg && homepage ? logoWhite : logo}
            atl="boy that feels logo"
          />
        </div>
      </Link>
      <div className="flex items-center tracking-widest">
        <div
          className={`flex items-center divide-x ${
            homepage
              ? "divide-white text-white lg:divide-black lg:text-black"
              : "divide-black "
          } hidden md:block`}
        >
          <Link href="/qna">
            <a className="hover:opacity-50 px-3 lg:px-6 transition-all hover:text-prim-6 text-base">
              ASK ME
            </a>
          </Link>
          <Link href="/post">
            <a className="hover:opacity-50 px-3 lg:px-6 transition-all hover:text-prim-6 text-base">
              POSTS
            </a>
          </Link>
          <Link href="/category">
            <a className="hover:opacity-50 px-3 lg:px-6 transition-all hover:text-prim-6 text-base">
              CATEGORIES
            </a>
          </Link>
          <Link href="/tag">
            <a className="hover:opacity-50 px-3 lg:px-6 transition-all  hover:text-prim-6 text-base pr-4 lg:pr-7">
              TAGS
            </a>
          </Link>
        </div>
        <IoMenuOutline
          className="text-3xl hover:opacity-50 cursor-pointer transition-all"
          style={{ marginTop: 2 }}
        />
      </div>
    </header>
  );
}
