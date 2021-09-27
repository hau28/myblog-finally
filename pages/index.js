import Head from "next/head";
import Header from "../components/Header";
import PostPreview from "../components/PostPreview";
import { IoIosSend } from "react-icons/io";
import Footer from "../components/Footer";

const posts = [
  {
    date: "19 Aug. 2020",
    title: "Get ready for holiday on a christmas week",
    category: "Poem",
    numOfComments: 3,
    imgUrl:
      "https://www.perfectfitresume.com/wp-content/uploads/2018/04/Custom_Writing-1080x675.jpeg",
  },
  {
    date: "19 Aug. 2020",
    title: "Get ready for holiday on a christmas week",
    category: "Poem",
    numOfComments: 3,
    imgUrl:
      "https://www.perfectfitresume.com/wp-content/uploads/2018/04/Custom_Writing-1080x675.jpeg",
  },
  {
    date: "19 Aug. 2020",
    title: "Get ready for holiday on a christmas week",
    category: "Poem",
    numOfComments: 3,
    imgUrl:
      "https://www.perfectfitresume.com/wp-content/uploads/2018/04/Custom_Writing-1080x675.jpeg",
  },
  {
    date: "19 Aug. 2020",
    title: "Get ready for holiday on a christmas week",
    category: "Poem",
    numOfComments: 3,
    imgUrl:
      "https://www.perfectfitresume.com/wp-content/uploads/2018/04/Custom_Writing-1080x675.jpeg",
  },
  {
    date: "19 Aug. 2020",
    title: "Get ready for holiday on a christmas week",
    category: "Poem",
    numOfComments: 3,
    imgUrl:
      "https://www.perfectfitresume.com/wp-content/uploads/2018/04/Custom_Writing-1080x675.jpeg",
  },
  {
    date: "19 Aug. 2020",
    title: "Get ready for holiday on a christmas week",
    category: "Poem",
    numOfComments: 3,
    imgUrl:
      "https://www.perfectfitresume.com/wp-content/uploads/2018/04/Custom_Writing-1080x675.jpeg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Boy That Feels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white lg:text-black self-stretch h-screen bg-prim-4 flex flex-col">
        <div className="block lg:hidden bg-typing absolute w-full h-screen z-0 bg-no-repeat bg-cover" />
        <div className="block lg:hidden bg-black bg-opacity-60 absolute w-full h-screen z-0 bg-no-repeat bg-cover" />
        <Header homepage />
        <div className="z-10 grid lg:grid-cols-2 h-full xl:px-16 pb-16 lg:pt-8">
          <div className="p-8 pt-0 p-16 pt-8 hidden lg:block">
            <img
              className="object-cover flex-1 lg:h-full w-full"
              src="/typing.gif"
            />
          </div>
          <div className="p-8 sm:p-16 pt-8 max-w-2xl lg:pl-0 flex flex-col justify-center">
            <h1 className="font-cinzel text-5xl sm:text-7xl mb-8">
              Lorem Ipsum
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center w-full text-center">
        <div className="self-stretch bg-prim-2 flex flex-col py-32 px-6 md:px-10 xl:px-32">
          <div className="lg:px-16 px-6 text-center items-center flex flex-col">
            <p className="font-playfair italic   text-prim-6 mb-2">
              Last updated 9 Sep. 2021
            </p>
            <h1 className="font-cinzel text-6xl mb-8">Newest Posts</h1>
            <div
              style={{
                width: 56,
                height: 1,
                backgroundColor: "black",
                opacity: 0.5,
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostPreview {...post} key={index} />
            ))}
          </div>
        </div>
        <div className="self-stretch bg-gray-1 flex flex-col py-32 px-6 md:px-10 xl:px-32">
          <div className="lg:px-16 px-6 text-center items-center grid md:grid-cols-2">
            <h1 className="font-cinzel text-5xl md:text-6xl self-center mb-6 md:mb-0">
              Subscribe to
              <br />
              my blog
            </h1>
            <div className="self-center flex flex-col md:text-left mx-4">
              <p className="mb-6 font-serif md:ml-2 md:mb-2">
                Will let you know via e-mail about my new posts and other
                updates, you can unsubscribe anytime.
              </p>
              <form className="w-full">
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input
                    className="font-serif bg-gray-1 border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Your e-mail"
                  />
                  <button
                    className="flex-shrink-0 text-teal-500 text-sm pt-1 px-2 text-2xl"
                    type="button"
                  >
                    <IoIosSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
