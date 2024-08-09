import Image from "next/image";

export default function Card({ item }) {
  return (
    <div className="w-full max-w-sm mx-auto border rounded-xl overflow-hidden p-4">
      <div className="relative">
        <Image src={item.cover} height={400} width={600} alt="each card img" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard...
        </p>
        <button className="mt-4 text-sm font-medium border-black border rounded-full px-4 py-2">
          Read More
        </button>
      </div>
    </div>
  );
}
