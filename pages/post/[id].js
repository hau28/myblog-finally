import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
} from "../../components/AnimatedIcons";
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
  Figure,
} from "../../components/PostContent";
import Script from "next/script";
import Breadcrumbs from "../../components/Breadcrumbs";
import Subscribe from "../../components/Subscribe";
import { createTheme } from "@mui/system";
import { Comment, CommentForm } from "../../components/Comment";

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
  {
    date: "19 Aug. 2020",
    title: "A summer and fall in Prague",
    imgUrl:
      "https://belletrist.qodeinteractive.com/wp-content/uploads/2020/08/Blog-single-img14.jpg",
  },
];

const newestPosts = [
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
  {
    date: "19 Aug. 2020",
    title: "A summer and fall in Prague",
    imgUrl:
      "https://belletrist.qodeinteractive.com/wp-content/uploads/2020/08/Blog-single-img14.jpg",
  },
];

const commonTags = [
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
  "Shortag",
];

const categories = [
  "Category",
  "Category",
  "Category",
  "Category",
  "Category",
  "Category",
];

function PanelHeader({ children }) {
  return (
    <div>
      <h1 className="font-playfair text-prim-6 text-2xl xl:text-xl mb-2">
        {children}
      </h1>
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

const comments = [
  {
    name: "Lorem ipsum",
    time: "1d",
    content:
      "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Lorem ipsum",
    time: "1d",
    content:
      "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    comments: [
      {
        name: "Lorem ipsum",
        time: "1d",
        content:
          "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comments: [
          {
            name: "Lorem ipsum",
            time: "1d",
            content:
              "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            name: "Lorem ipsum",
            time: "1d",
            content:
              "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
      {
        name: "Lorem ipsum",
        time: "1d",
        content:
          "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comments: [
          {
            name: "Lorem ipsum",
            time: "1d",
            content:
              "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
  {
    name: "Lorem ipsum",
    time: "1d",
    content:
      "Aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function SinglePost() {
  const [fixedLeftPanel, setFixedLeftPanel] = useState(false);
  const [leftPanelWidth, setLeftPanelWidth] = useState(297);
  const [scrollBottom, setScrollBottom] = useState(false);
  const mainRef = useRef();
  const leftPanelRef = useRef();
  const isXl = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const { date, title, category, numOfComments, imgUrl } = post;
  const downed = false;
  const confettied = false;
  const hearted = false;
  const handleScroll = () => {
    const position = window?.scrollY;
    const windowHeight = window?.innerHeight;
    const mainHeight = mainRef.current.clientHeight;
    const port = 551;
    if (position > port) {
      if (
        position < port + mainHeight - windowHeight + 20 &&
        mainHeight > windowHeight
      ) {
        if (isXl) {
          setLeftPanelWidth(leftPanelRef.current.offsetWidth);
          setFixedLeftPanel(true);
        } else setFixedLeftPanel(false);
        setScrollBottom(false);
      } else {
        if (isXl) {
          setScrollBottom(true);
        }
        setFixedLeftPanel(false);
      }
    } else {
      setFixedLeftPanel(false);
      setScrollBottom(false);
    }
  };
  const handleResize = () => {
    console.log(leftPanelRef.current.offsetWidth);
    handleScroll();
    if (isXl) {
      setLeftPanelWidth(leftPanelRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

      <Breadcrumbs paths={[post.category, post.title]} />
      <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full">
        <img src={imgUrl} className="w-full h-full object-cover" />
      </div>

      <main
        ref={mainRef}
        className="flex flex-col xl:grid xl:grid-cols-12 items-center w-full min-h-screen my-8 px-8 sm:px-10"
      >
        <div
          className={`col-span-12 xl:col-span-3 ${
            scrollBottom ? "self-end" : "self-start"
          } order-2 xl:order-1 w-full`}
          ref={leftPanelRef}
        >
          <div
            className={`${fixedLeftPanel && isXl ? "fixed top-0 " : ""} ${
              scrollBottom ? "-translate-y-28" : ""
            } pt-12  flex flex-col-reverse xl:flex-col  xl:pr-12`}
            style={{
              width: isXl ? leftPanelWidth : "100%",
            }}
          >
            <div>
              <PanelHeader>Related posts</PanelHeader>
              <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-2 mb-2">
                {relatedPosts.map((relatePost, i) => (
                  <div
                    className=" hover:cursor-pointer hover:underline transition-all"
                    key={i}
                  >
                    <p className="font-playfair italic text-sm text-prim-6 mb-1 ">
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
              </div>
            </div>
            <div className="h-8 xl:h-2" />
            <div>
              <PanelHeader>Listening to this</PanelHeader>
              <iframe
                className="mt-4 h-40 "
                width="100%"
                scrolling="no"
                frameborder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227042825&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </div>
          </div>
        </div>
        <article className="tracking-wide  font-serif bg-white max-w-2xl xl:col-span-6 xl:max-w-none order-1 xl:order-2">
          <p className="font-playfair italic text-prim-6 mb-2 hover:cursor-pointer hover:underline">
            On {date}
          </p>
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl mb-4  transition-all ease-in-out duration-500">
            {title}
          </h1>
          <div className="font-sans flex items-center mb-5 justify-between">
            <span className=" text-gray-400">6 mins read</span>
            <div className="flex items-center gap-4  text-2xl">
              <IoLogoFacebook className="hover:text-blue-600 hover:cursor-pointer transition-all" />
              <IoIosLink className="hover:text-prim-6 hover:cursor-pointer transition-all" />
            </div>
          </div>
          <div className="text-gray-800">
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
            <Figure />
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
          <div className="font-serif flex items-center mb-8 flex-wrap gap-2 text-xs">
            <div className="border border-prim-4 py-2 px-3 hover:cursor-pointer">
              <span>Shortag 1</span>
            </div>
            <div className="bg-gray-1 py-2 px-3 hover:cursor-pointer">
              <span>Shortag 1</span>
            </div>
            <div className="bg-gray-1 py-2 px-3 hover:cursor-pointer">
              <span>Shortag 1</span>
            </div>
            <div className="bg-gray-1 py-2 px-3 hover:cursor-pointer">
              <span>Shortag 1</span>
            </div>
            <div className="py-2 px-3 hover:cursor-pointer hover:underline">
              <span>See more...</span>
            </div>
          </div>
          <div className="font-sans flex items-center mb-5 justify-end">
            <div className="flex items-center gap-4  text-2xl">
              <IoLogoFacebook className="hover:text-blue-600 hover:cursor-pointer transition-all" />
              <IoIosLink className="hover:text-prim-6 hover:cursor-pointer transition-all" />
            </div>
          </div>
          <CommentForm />
          <h4 className="text-2xl mb-6 mt-4">Comments (2)</h4>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </article>
        <div className="xl:col-span-3 xl:pl-12 xl:pr-2 self-start mt-6 xl:mt-12 order-3">
          <PanelHeader>Categories</PanelHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
            {categories.map((cate) => (
              <div className="category hover:cursor-pointer py-2 mt-1">
                <h2 className="categorychild font-cinzel text-lg font-semibold transition-all ease-in-out">
                  {cate}
                </h2>
              </div>
            ))}
          </div>

          <div className="h-3" />
          <PanelHeader>Tags</PanelHeader>
          <div className="h-1" />
          <div className="flex flex-wrap font-serif gap-2">
            {commonTags.map((tag) => (
              <div className="text-xs bg-gray-1 p-2 hover:cursor-pointer">
                <span>{tag} (2)</span>
              </div>
            ))}

            <div className="text-xs p-2 hover:cursor-pointer hover:underline">
              <span>See more...</span>
            </div>
          </div>
          <div className="h-5" />

          <PanelHeader>Newest posts</PanelHeader>
          <div className="h-1" />
          <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-8 xl:gap-4">
            {newestPosts.map((relatePost, i) => (
              <div className="hover:cursor-pointer hover:underline" key={i}>
                <img
                  src={relatePost.imgUrl}
                  className=" h-72 md:h-72 xl:h-40 mr-2 object-cover w-full"
                  style={{ marginTop: 4 }}
                ></img>
                <h2 className="font-cinzel text-lg font-semibold  transition-all ease-in-out duration-500">
                  {relatePost.title}
                </h2>
                <p className="font-playfair italic text-sm text-prim-6 mb-1">
                  On {relatePost.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}
