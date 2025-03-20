"use client";
import Image from "next/image";
import Link from "next/link";

export default function DetailNav({ type, title }) {
  return (
    <nav className="w-[80%]">
      <ul className="w-full flex gap-10 items-center">
        <li>
          <Link className="group flex gap-3 items-center" href={"/"}>
            <svg
              className="block group-hover:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className=" hidden group-hover:block"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-lg font-medium text-[#0B3954] group-hover:bg-gray-100 group-hover:text-[#087E8B]">
              Home
            </span>
          </Link>
        </li>
        <Image
          src={"/icons/arrow.svg"}
          width={10}
          height={10}
          alt="arrow icon"
        />
        <li>
          <Link
            className="group flex gap-3 items-center"
            href={type === "book" ? "/book-categories" : "/old-school-cartoons"}
          >
            <svg
              className="block group-hover:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className=" hidden group-hover:block"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-lg font-medium text-[#0B3954] group-hover:bg-gray-100 group-hover:text-[#087E8B]">
              {type === "book" ? "Book Categories" : "Old School Cartoons"}
            </span>
          </Link>
        </li>
        <Image
          src={"/icons/arrow.svg"}
          width={10}
          height={10}
          alt="arrow icon"
        />
        <li>
          <div className="flex gap-3 items-center">
            <Image
              src={"/icons/book-open.svg"}
              width={22}
              height={22}
              alt="book-open icon"
            />
            <span className="text-lg font-medium text-red-500">{title}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
