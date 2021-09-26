import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto py-4 px-6 md:py-6 lg:px-16">
      <Link href="/">
        <img
          className="w-44 md:w-48 cursor-pointer"
          src="/small-logo.png"
          atl="boy that feels logo"
        />
      </Link>
      <div className="flex items-center tracking-widest">
        <div className="flex items-center divide-x divide-gray-100 hidden md:block">
          <Link href="/qna">
            <a className="hover:text-prim-6 px-6">ASK ME</a>
          </Link>
          <Link href="/post">
            <a className="hover:text-prim-6 px-6">POSTS</a>
          </Link>
          <Link href="/category">
            <a className="hover:text-prim-6 px-6 pr-7">CATEGORIES</a>
          </Link>
        </div>
        <IoMenuOutline
          className="text-3xl hover:text-prim-6 cursor-pointer"
          style={{ marginTop: 2 }}
        />
      </div>
    </header>
  );
}
