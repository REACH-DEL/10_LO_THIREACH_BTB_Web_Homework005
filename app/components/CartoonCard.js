import Link from "next/link";

export default function CartoonCard({ ...cartoon }) {
  return (
    <Link className="w-fit" href={`/old-school-cartoons/${cartoon.id}`}>
      <div className="rounded-2xl h-[400px] w-[320px] overflow-hidden">
        <img
          src={cartoon.image}
          width={320}
          height={380}
          alt="cartoons image"
        />
      </div>
      <h1 className="text-[#0B3954] font-bold text-xl mt-3">{cartoon.ct_title}</h1>
      <p className="flex items-center gap-2 text-lg font-bold text-[#3d94c3]">
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
          {cartoon.view_count} times  |  {cartoon.published_year.split("-")[0]}
        </span>
      </p>
    </Link>
  );
}
