import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosLink } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import {
  confettiIcon,
  confettiIconEnable,
  downIcon,
  downIconEnable,
  heartIcon,
  heartIconEnable,
} from "../components/AnimatedIcons";
import { useMediaQuery } from "react-responsive";
import {
  P1,
  P,
  H2,
  H3,
  Code,
  CodeBlock,
  Ol,
  Ul,
  Li,
  Blockquote,
} from "../components/PostContent";
import Script from "next/script";

const post = {
  date: "19 Aug. 2020",
  title: "A summer and fall in Prague",
  category: "Poem",
  numOfComments: 3,
  imgUrl:
    "https://belletrist.qodeinteractive.com/wp-content/uploads/2020/08/Blog-single-img14.jpg",
};

const relatedPosts = [
  {
    date: "19 Aug. 2020",
    title: "A summer and fall in Prague",
    imgUrl:
      "https://belletrist.qodeinteractive.com/wp-content/uploads/2020/08/Blog-single-img14.jpg",
  },
  {
    date: "19 Aug. 2020",
    title: "A summer and fall in Prague",
    imgUrl:
      "https://belletrist.qodeinteractive.com/wp-content/uploads/2020/08/Blog-single-img14.jpg",
  },
  {
    date: "19 Aug. 2020",
    title: "A summer and fall in Prague",
    imgUrl:
      "https://belletrist.qodeinteractive.com/wp-content/uploads/2020/08/Blog-single-img14.jpg",
  },
];

function PanelHeader({ children }) {
  return (
    <div>
      <h1 className="font-playfair text-prim-6 text-xl mb-2">{children}</h1>
      <div
        style={{ height: 0.5 }}
        className="w-full bg-prim-6 opacity-50 mb-2"
      />
    </div>
  );
}

const codeString = `
var test = require('tape');

var reducer = function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	  var _ref = arguments[1];
	  var type = _ref.type;
	  var payload = _ref.payload;
	
	  var newState = void 0;
	  switch (type) {
	    case 'INCREMENT':
	      newState = state + 1;
	      break;
	    case 'DECREMENT':
	      newState = state - 1;
	      break;
	    default:
	      newState = state;
	  }
	  return newState;
	}
var equality = (result, nextState) => result === nextState;
var actions = [];
`;

export default function Post() {
  const [showLeftPanel, setShowLeftPanel] = useState(false);
  const mainRef = useRef();
  const { date, title, category, numOfComments, imgUrl } = post;
  const isXl = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const downed = false;
  const confettied = false;
  const hearted = false;
  const handleScroll = () => {
    const position = window.scrollY;
    const windowHeight = window.innerHeight;
    const mainHeight = mainRef.current.clientHeight;
    if (
      position > 530 &&
      position < 530 + mainHeight - windowHeight + 20 &&
      mainHeight > windowHeight
    ) {
      setShowLeftPanel(true);
    } else {
      setShowLeftPanel(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Script
        src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"
        strategy="beforeInteractive"
      ></Script>

      <Head>
        <title>Post name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="font-playfair self-stretch bg-gray-1 py-4 px-6 sm:px-16 gap-2">
        <span className="hover:cursor-pointer text-prim-6 hover:opacity-75 transition-all">
          Home
        </span>
        <span className="px-2">›</span>
        <span className="hover:cursor-pointer text-prim-6 hover:opacity-75  transition-all">
          Poem
        </span>
        <span className="px-2">›</span>
        <span>Get ready for holiday on a christmas week</span>
      </div>
      <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full">
        <img src={imgUrl} className="w-full h-full object-cover" />
      </div>
      {isXl && (
        <div
          className={`${
            showLeftPanel ? "" : "pointer-events-none -translate-x-72"
          } fixed h-full top-0 left-0 transition-all ease-out flex flex-col justify-center pl-10 pr-8`}
          style={{ width: 320 }}
        >
          <PanelHeader>Related posts</PanelHeader>
          {relatedPosts.map((relatePost, i) => (
            <div className="mb-4" key={i}>
              <p className="font-playfair italic text-sm text-prim-6 mb-1 hover:cursor-pointer hover:underline">
                On {relatePost.date}
              </p>
              <h2 className="font-cinzel text-lg font-semibold  transition-all ease-in-out duration-500">
                <img
                  src={relatePost.imgUrl}
                  className=" h-12 w-12 mr-2 object-cover float-left"
                  style={{ marginTop: 4 }}
                ></img>
                {relatePost.title}
              </h2>
            </div>
          ))}
          <div className="h-2" />
          <PanelHeader>Listening to this</PanelHeader>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205531776&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      )}
      <main
        ref={mainRef}
        className="flex flex-col xl:grid xl:grid-cols-12 items-center w-full min-h-screen my-8 px-8 sm:px-10"
      >
        <div className="col-span-0 xl:col-span-3"></div>
        <article className="font-serif bg-white max-w-2xl xl:col-span-6 xl:max-w-none">
          <p className="font-playfair italic text-prim-6 mb-2 hover:cursor-pointer hover:underline">
            On {date}
          </p>
          <h1 className="font-cinzel text-4xl mb-4  transition-all ease-in-out duration-500">
            {title}
          </h1>
          <div className="font-sans flex items-center mb-5 justify-between">
            <span className=" text-gray-400">6 mins read</span>
            <div className="flex items-center gap-4  text-2xl">
              <IoLogoFacebook className="hover:text-blue-600 hover:cursor-pointer transition-all" />
              <IoIosLink className="hover:text-prim-6 hover:cursor-pointer transition-all" />
            </div>
          </div>
          <div className="tracking-wide text-gray-800">
            <P1>
              Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </P1>
            <Blockquote
              quote="Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
              person="Some Famous Guy"
            />
            <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</H2>
            <P>
              Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt <Code>ut labore et dolore</Code> magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </P>
            <Ol className="list-decimal mb-5 pl-5">
              <Li>
                Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Li>
              <Li>
                Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Li>
            </Ol>
            <P>
              Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </P>
            <H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</H3>
            <P>
              Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </P>
            <CodeBlock>{codeString}</CodeBlock>
            <P>
              Aorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </P>
          </div>
          <div className="font-sans flex items-center mb-5 justify-between">
            <div className="flex items-center font-bold gap-4">
              <div className="flex flex-col items-center hover:cursor-pointer ">
                <div
                  className={`flex items-center ${
                    downed ? "bg-blue-100" : "bg-gray-100"
                  } p-1 rounded-3xl transition-all`}
                  style={{ padding: "calc(0.25rem + 3px)" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: downed ? downIconEnable : downIcon,
                    }}
                  ></div>
                </div>
                <span
                  className={`${downed ? "text-blue-500" : "text-gray-500"}`}
                >
                  3
                </span>
              </div>
              <div className="flex flex-col items-center hover:cursor-pointer">
                <div
                  className={`flex items-center ${
                    confettied ? "bg-yellow-100" : "bg-gray-100"
                  } p-1 rounded-3xl transition-all`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: confettied ? confettiIconEnable : confettiIcon,
                    }}
                  ></div>
                </div>
                <span
                  className={`${
                    confettied ? "text-yellow-500" : "text-gray-500"
                  }`}
                >
                  3
                </span>
              </div>
              <div className="flex flex-col items-center hover:cursor-pointer">
                <div
                  className={`flex items-center ${
                    hearted ? "bg-red-100" : "bg-gray-100"
                  } rounded-3xl transition-all`}
                  style={{ padding: "calc(0.25rem + 3px)" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: hearted ? heartIconEnable : heartIcon,
                    }}
                  ></div>
                </div>
                <span
                  className={`${hearted ? "text-red-500" : "text-gray-500"}`}
                >
                  3
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4  text-2xl">
              <IoLogoFacebook className="hover:text-blue-600 hover:cursor-pointer transition-all" />
              <IoIosLink className="hover:text-prim-6 hover:cursor-pointer transition-all" />
            </div>
          </div>
        </article>
        <div className="col-span-0 xl:col-span-3" />
      </main>
      <Footer />
    </div>
  );
}
