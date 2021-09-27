import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosLink } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  confettiIcon,
  confettiIconEnable,
  downIcon,
  downIconEnable,
  heartIcon,
  heartIconEnable,
} from "../components/AnimatedIcons";
import { useMediaQuery } from "react-responsive";

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

function P1(props) {
  return (
    <p
      className="mb-5 leading-relaxed first-letter:float-left first-letter:text-5xl first-letter:pr-3 first-letter:font-black"
      {...props}
    />
  );
}

function P(props) {
  return <p className="mb-5 leading-relaxed" {...props} />;
}

function H2(props) {
  return (
    <h2 className="font-sans text-3xl font-semibold pt-3 mb-5" {...props} />
  );
}

function H3(props) {
  return <h3 className="font-sans text-2xl font-semibold mb-5" {...props} />;
}

function Code(props) {
  return <code className="bg-gray-200 p-1 rounded-md" {...props} />;
}

function CodeBlock(props) {
  return (
    <div className="mb-5">
      <SyntaxHighlighter
        useInlineStyles
        language="javascript"
        customStyle={{
          overflow: "hidden",
          backgroundColor: "rgba(243, 244, 246)",
          borderRadius: "0.5rem",
        }}
        lineProps={{
          style: {
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
          },
        }}
        wrapLines={true}
        {...props}
      />
    </div>
  );
}

function Ol(props) {
  return <ol className="list-decimal mb-5 pl-5" {...props} />;
}

function Ul(props) {
  return <ul className="list-decimal mb-5 pl-5" {...props} />;
}

function Li(props) {
  return <li className="mb-2" {...props} />;
}

function Blockquote({ quote, person }) {
  return (
    <blockquote className="relative p-4 pb-3 mb-5 text-xl italic border-l-4 border-neutral-500 quote">
      <span className="text-4xl absolute font-black text-gray-400 left-2 top-0">
        &ldquo;
      </span>
      <p className="mb-4 pt-2">{quote}</p>
      <cite className="flex">
        <span className="text-sm italic font-bold">- {person}</span>
      </cite>
    </blockquote>
  );
}

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

const downed = false;
const confettied = false;
const hearted = false;

export default function Post() {
  const [showLeftPanel, setShowLeftPanel] = useState(false);
  const mainRef = useRef();
  const { date, title, category, numOfComments, imgUrl } = post;
  const isXl = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const downColor = () => (downed ? "blue" : "gray");
  const confettiColor = () => (confettied ? "yellow" : "gray");
  const heartColor = () => (hearted ? "red" : "gray");
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
                  className={`flex items-center bg-${downColor()}-100 p-1 rounded-3xl transition-all`}
                  style={{ padding: "calc(0.25rem + 3px)" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: downed ? downIconEnable : downIcon,
                    }}
                  ></div>
                </div>
                <span className={`text-${downColor()}-500`}>3</span>
              </div>
              <div className="flex flex-col items-center hover:cursor-pointer">
                <div
                  className={`flex items-center bg-${confettiColor()}-100 p-1 rounded-3xl transition-all`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: confettied ? confettiIconEnable : confettiIcon,
                    }}
                  ></div>
                </div>
                <span className={`text-${confettiColor()}-500`}>3</span>
              </div>
              <div className="flex flex-col items-center hover:cursor-pointer">
                <div
                  className={`flex items-center bg-${heartColor()}-100 rounded-3xl transition-all`}
                  style={{ padding: "calc(0.25rem + 3px)" }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: hearted ? heartIconEnable : heartIcon,
                    }}
                  ></div>
                </div>
                <span className={`text-${heartColor()}-500`}>3</span>
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
