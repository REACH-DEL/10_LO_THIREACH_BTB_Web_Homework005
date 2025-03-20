"use client";

import { Select, SelectItem } from "@heroui/react";

export default function CategorySelect({ options, type }) {
  return (
    <Select className="w-48 py-2" placeholder="Select a Category" aria-label="false">
      {options.map((option) => (
        <SelectItem
          key={option.id}
          as="a"
          href={`${type === "book"?"/book-categories":"/old-school-cartoons"}?categoryId=${option.id}`}
        >
          {option.book_cate_name || option.cartoon_genre}
        </SelectItem>
      ))}
    </Select>
  );
}
