"use client";

import Image from "next/image";
import { useState } from "react";

import Card from "./components/ui/Card";
import Footer from "./components/ui/Footer";

const cards1 = [
  { id: 1, cover: "/blog_1.png", title: "Grilled Tomatoes at Home" },
  { id: 2, cover: "/blog_2.png", title: "Snacks for Travel" },
  { id: 3, cover: "/blog_3.png", title: "Post-workout Recipes" },
];

const cards2 = [
  { id: 4, cover: "/blog_4.png", title: "How To Grill Corn" },
  { id: 5, cover: "/blog_5.png", title: "Crunchwrap Supreme" },
  { id: 6, cover: "/blog_6.png", title: "Broccoli Cheese Soup" },
];

export default function Home() {
  const [arr1, setArr1] = useState("block");
  const [arr2, setArr2] = useState("hidden");
  const [page, setPage] = useState(1);

  const showNext = () => {
    setArr1("hidden");
    setArr2("block");
    setPage(2);
  };

  const showPrev = () => {
    setArr1("block");
    setArr2("none");
    setPage(1);
  };
  return (
    <main className="w-full">
      <section className="flex justify-between items-center flex-col lg:flex-row relative">
        <div className="text-center lg:text-left lg:w-1/2 p-4 lg:px-24 order-2 lg:order-1 mt-20 md:mt-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="hidden lg:block absolute top-10"
          />
          <h1 className="text-5xl font-bold text-blue-900 w-[20rem]">
            Discover the <span className="text-red-500">Best</span> Food and
            Drinks
          </h1>
          <p className="mt-5 text-gray-700 w-[20rem]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="mt-5 bg-red-500 border-2 border-white w-40 h-14 rounded-full text-white font-semibold">
            Explore Now!
          </button>
        </div>
        <div className="relative lg:w-1/2 order-1 lg:order-2">
          <Image
            src="/hero.png"
            alt="Food Image"
            width={670}
            height={700}
            className="block "
          />
          <Image
            src="/hero_overlay.png"
            alt="Overlay Image"
            width={670}
            height={680}
            className="absolute top-0 right-0"
          />
          <button className="absolute z-50 md:top-8 md:right-8 top-4 right-4 text-sm md:text-md border border-white w-28 h-10 lg:w-32 lg:h-11 rounded-full text-white">
            Get In Touch
          </button>
        </div>
      </section>

      <section className="my-28">
        <div className="bg-gray-100 flex flex-col lg:flex-row justify-evenly items-center">
          <Image
            src="/about_us.png"
            alt="About Image"
            width={300}
            height={300}
            className="hidden lg:block"
          />
          <div className="text-center lg:text-left lg:w-1/2 p-10 md:py-10 py-20">
            <h2 className="text-4xl font-bold text-blue-900">About Us</h2>
            <p className="mt-5 text-gray-500 text-xs md:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <button className="mt-5 bg-red-500 border-2 w-36 h-10 rounded-full text-white">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="my-24 px-12">
        <h2 className="text-4xl font-semibold text-blue-900 text-center lg:text-left">
          Latest Articles
        </h2>
        <div className="my-10 flex flex-col lg:flex-row justify-start gap-10 lg:gap-10">
          {cards1.map((item) => (
            <div
              key={item.id}
              className={`transition-all duration-300 ${arr1}`}
            >
              <Card item={item} />
            </div>
          ))}
          {cards2.map((item) => (
            <div
              key={item.id}
              className={`transition-all duration-300 ${arr2}`}
            >
              <Card item={item} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            disabled={page === 1}
            className="bg-white border px-4 py-2 rounded"
            onClick={showPrev}
          >
            {"<"}
          </button>
          <span>{page}/2</span>
          <button
            disabled={page === 2}
            className="bg-white border px-4 py-2 rounded"
            onClick={showNext}
          >
            {">"}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
