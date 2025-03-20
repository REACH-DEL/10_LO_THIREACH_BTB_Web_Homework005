"use client";
import { usePathname } from "next/navigation";

export default function DetailCard({
  title,
  author,
  createdAt,
  desc,
  image,
  viewCount,
}) {
  const pathname = usePathname();
  return (
    <div className="bg-white rounded-[50px] p-16 mt-36 w-[80%]">
      <div className="relative flex justify-end mt-56">
        <img
          src={image}
          width={280}
          alt="cover image"
          className="absolute bottom-0 rounded-2xl shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-2xl text-[#0B3954] font-bold">{title}</h1>
        <h2 className="text-xl font-medium mt-4">
          by <span className="text-[#087E8B] font-bold">{author}</span>
        </h2>
        <p
          className={`${
            pathname.includes("book-categories") ? "hidden" : "flex"
          } items-center gap-2 text-lg font-bold text-[#3d94c3] mt-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {viewCount} times | {createdAt}
          </span>
        </p>
        <p className="text-[#0B3954] font-normal mt-4">{desc}</p>
      </div>
    </div>
  );
}
