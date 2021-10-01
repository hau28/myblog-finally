import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Post() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Post name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col xl:grid xl:grid-cols-12 items-center w-full min-h-screen my-8 px-8 sm:px-10"></main>
      <Footer />
    </div>
  );
}
