import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex justify-between items-center flex-col lg:flex-row relative">
        <div className="text-center lg:text-left lg:w-1/2 p-4 lg:px-24 ">
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
        <div className="relative lg:w-1/2 ">
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
          <button className="absolute z-50 top-8 right-8 border border-white w-28 h-10 lg:w-32 lg:h-11 rounded-full text-white">
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
          <div className="text-center lg:text-left lg:w-1/2 p-10">
            <h2 className="text-4xl font-bold text-blue-900">About Us</h2>
            <p className="mt-5 text-gray-700">
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
    </main>
  );
}
