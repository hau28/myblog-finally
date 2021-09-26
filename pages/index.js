import Head from "next/head";
import Header from "../components/Header";
import PostPreview from "../components/PostPreview";
import { IoIosSend } from "react-icons/io";

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
      <div className="self-stretch h-screen bg-prim-4">
        <Header />
      </div>
      <main className="flex flex-col items-center w-full text-center">
        <div className="self-stretch bg-prim-2 flex flex-col py-32 px-6 md:px-10 xl:px-32">
          <div className="lg:px-16 px-6 text-center items-center flex flex-col">
            <p className="font-serif italic text-prim-6 mb-2">
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
            <h1 className="font-cinzel text-5xl self-center mb-6 md:mb-0">
              Subscribe to
              <br />
              my blog
            </h1>
            <div className="self-center flex flex-col md:text-left mx-4">
              <p className="mb-6 font-serif md:ml-1 md:mb-2">
                Will let you know via e-mail about my new posts and other
                updates if you are into that kind of thing...
              </p>
              <form class="w-full">
                <div className="flex items-center border-b border-teal-500 py-2">
                  <input
                    className="font-serif bg-gray-1 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
      <footer className="self-stretch flex flex-col py-32 px-6 md:px-10 xl:px-32">
        <p>Ok</p>
      </footer>
    </div>
  );
}
