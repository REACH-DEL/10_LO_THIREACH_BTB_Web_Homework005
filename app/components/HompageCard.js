import Image from "next/image";

export default function HompageCard({ tag, detail, path, image }) {
  return (
    <div>
      <a
        href={path}
        className="block w-fit h-fit rounded-[20px] overflow-hidden"
      >
        <div className="relative w-fit h-fit">
          <div className="absolute flex gap-1 items-center left-3 top-3 bg-white px-3 py-1 w-fit z-10 rounded-2xl">
            <Image
              src={"/icons/tag.svg"}
              width={18}
              height={18}
              alt="tag icon"
            />
            <span className="text-sm font-medium text-[#087E8B]">{tag}</span>
          </div>
          <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black/0 hover:bg-black/25 opacity-0 hover:opacity-100 z-10 transition-opacity duration-300 p-16">
            <span className="text-white text-4xl text-center font-medium">
              {detail}
            </span>
          </div>
          <Image
            src={`/images/home${image}.png`}
            height={350}
            width={350}
            alt="homebook image"
            className="z-0 opacity-100 hover:opacity-0"
          />
        </div>
      </a>
    </div>
  );
}
