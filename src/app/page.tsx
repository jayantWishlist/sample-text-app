import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const Background = "/card-left.jpg";
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="max-w-full lg:max-w-[50%] w-full lg:max-w-2/3 lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${Background})` }}
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className=" font-bold text-[12px] mb-2">
              BOLD: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="font-semibold text-[12px] mb-2">
              SEMI BOLD: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fugiat, reprehenderit ex deleniti magnam corrupti assumenda
              nihil recusandae quae rerum beatae a voluptatem est ea at culpa
            </div>
            <p className="text-gray-700 text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              reprehenderit ex deleniti magnam corrupti assumenda nihil
              recusandae quae rerum beatae a voluptatem est ea at culpa
              reiciendis debitis deleniti magnam corrupti assumenda nihil
              recusandae quae rerum beatae a voluptatem est ea at culpa
              reiciendis debitis
            </p>
          </div>
          <div className="mb-4 flex gap-8">
            <Link href="/" type="button" className="px-3 py-2 text-[12px] text-center text-[#5767FB]">
              Text Button (12px)
            </Link>
            <Link href="/ten"
              type="button"
              className="px-3 py-2 text-[12px] text-center rounded-lg border border-gray-300"
            >
              Secondary Button (10px)
            </Link>
            <button
              type="button"
              className="px-3 py-2 text-[12px] font-medium text-center text-white bg-[#5767FB] rounded-lg"
            >
              Primary btn
            </button>
          </div>
          <div className="flex items-center">
            <Image
              className="w-10 h-10 rounded-full mr-4"
              src="/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
              height={1000}
              width={1000}
            />
            <div className="text-[12px]">
              <p className="text-gray-900 text-[12px] leading-none">Wishlist Reinink</p>
              <p className="text-gray-600 text-[12px]">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
