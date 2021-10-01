import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BottomLineInput } from "../components/Input";
import { IoSearchOutline } from "react-icons/io5";
import { InputLabel, NativeSelect } from "@mui/material";
import moment from "moment";
import PostPreview from "../components/PostPreview";
import Pagination from "../components/Pagination";

const categories = ["Category 1", "Category 2", "Category 3"];
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

export default function Post() {
  const [form, setForm] = useState({
    search: "",
    year: "All",
    month: "All",
    category: "All",
  });
  function handleFormChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value.length < 2 ? e.target.value.trim() : e.target.value,
    }));
  }
  function handleSelect(e) {
    handleFormChange(e);
    updateList();
  }
  function updateList() {}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Post name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="bg-gray-1" />
      <main className="bg-gray-1 flex flex-col px-6 sm:px-16 md:px-6 w-full min-h-screen pb-16">
        <form
          className="flex flex-col gap-4 mb-6 "
          onSubmit={(e) => {
            e.preventDefault();
            updateList();
          }}
        >
          <div className="grid grid-cols-12 gap-4 md:px-10">
            <BottomLineInput
              className={`col-span-12 md:col-span-6 
              ${form.year === "All" ? "lg:col-span-4" : "lg:col-span-3"}
              `}
              name="search"
              value={form.search}
              onChange={handleFormChange}
              placeholder="Search"
              IconComponent={IoSearchOutline}
            />
            <NativeSelect
              className={`col-span-12 md:col-span-6  ${
                form.year === "All" ? "lg:col-span-4" : "lg:col-span-3"
              }`}
              name="category"
              value={form.category}
              onChange={handleSelect}
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
                style: {
                  padding: "0.5rem",
                  fontFamily: "Merriweather",
                },
              }}
            >
              <option value="All">All categories</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </NativeSelect>
            <NativeSelect
              className={`${
                form.year === "All"
                  ? "col-span-12 lg:col-span-4"
                  : "col-span-6 lg:col-span-3"
              }`}
              name="year"
              value={form.year}
              onChange={(e) => {
                if (e.target.value === "All") {
                  setForm((prev) => ({ ...prev, month: "All" }));
                }
                handleSelect(e);
              }}
              inputProps={{
                name: "year",
                id: "uncontrolled-native",
                style: {
                  padding: "0.5rem",
                  fontFamily: "Merriweather",
                },
              }}
            >
              <option value="All">All time</option>
              {Array.from({ length: moment().year() - 2021 + 1 }).map(
                (v, i) => (
                  <option key={2021 + i} value={2021 + i}>
                    {2021 + i}
                  </option>
                )
              )}
            </NativeSelect>
            {form.year !== "All" && (
              <NativeSelect
                className="col-span-6 lg:col-span-3"
                name="month"
                value={form.month}
                onChange={handleSelect}
                inputProps={{
                  name: "month",
                  id: "uncontrolled-native",
                  style: {
                    padding: "0.5rem",
                    fontFamily: "Merriweather",
                  },
                }}
              >
                <option value="All">Whole year</option>
                {moment.months().map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </NativeSelect>
            )}
          </div>
        </form>
        <h1 className=" font-playfair text-3xl mb-8 md:text-center md:text-4xl lg:text-5xl max-w-6xl self-center">
          {form.category}{" "}
          {form.category === "All" || form.year !== "All" || form.search
            ? "posts"
            : ""}
          {form.year !== "All" ? " in" : ""}
          {form.month !== "All" ? ` ${form.month}` : ""}
          {form.year !== "All" ? ` ${form.year}` : ""}
          {form.search ? ` containing "${form.search}"` : ""}
        </h1>
        <Pagination current={8} total={12} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl self-center gap-4">
          {posts.map((post) => (
            <PostPreview {...post} />
          ))}
        </div>
        <Pagination current={8} total={12} />
      </main>
      <Footer />
    </div>
  );
}
