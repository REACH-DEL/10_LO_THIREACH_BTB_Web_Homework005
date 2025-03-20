"use client";

import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function CategorySelect({ options }) {
  const router = useRouter();
  const params = useSearchParams();
  const value = params.get("categoryId") || "";

  return (
    <select
      onChange={(e) => {
        e.preventDefault();
        router.replace(`?categoryId=${e.target.value}`);
      }}
      value={value}
      className="w-56 py-2 rounded-lg border text-gray-500 px-5 focus:outline outline-[#087E8B]"
    >
      <option value="" disabled>
        Select a Category
      </option>
      {options.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.book_cate_name || option.cartoon_genre}
          </option>
        );
      })}
    </select>
  );
}
