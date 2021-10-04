import { IoIosLink } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

export default function PostPreview({
  date,
  title,
  category,
  numOfComments,
  imgUrl,
}) {
  const [hoverPost, setHoverPost] = useState(false);
  return (
    <div className="flex flex-col items-start text-left mb-8">
      <Link href="/">
        <div
          className="h-64 w-full mb-6"
          onMouseOver={() => setHoverPost(true)}
          onMouseOut={() => setHoverPost(false)}
        >
          <img
            src={imgUrl}
            className={`w-full h-full object-cover hover:cursor-pointer transition-all ease-in-out duration-500 ${
              hoverPost ? "opacity-75" : ""
            }`}
          />
        </div>
      </Link>
      <Link href="/post/1">
        <p className="font-playfair italic text-prim-6 mb-2 hover:cursor-pointer hover:underline">
          On {date}
        </p>
      </Link>
      <Link href="/post/1">
        <h2
          onMouseOver={() => setHoverPost(true)}
          onMouseOut={() => setHoverPost(false)}
          className={`font-cinzel text-3xl mb-4 hover:cursor-pointer transition-all ease-in-out duration-500 ${
            hoverPost ? "text-prim-6" : ""
          }`}
        >
          {title}
        </h2>
      </Link>
      <div
        className="mb-3"
        style={{
          width: "100%",
          height: 0.5,
          backgroundColor: "black",
          opacity: 0.5,
        }}
      />
      <div className="flex self-stretch justify-between items-center">
        <div className="flex items-center divide-x divide-black text-xs tracking-widest">
          <Link href={`/category/${category.toLowerCase()}`}>
            <span className="pr-4 hover:cursor-pointer hover:text-prim-6 hover:underline transition-all">
              {category.toUpperCase()}
            </span>
          </Link>
          <span className="pl-4 hover:cursor-pointer hover:underline hover:text-prim-6  ">
            {numOfComments} COMMENTS
          </span>
        </div>
        <IoIosLink className="hover:text-prim-6 hover:cursor-pointer text-lg transition-all" />
      </div>
    </div>
  );
}
