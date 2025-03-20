import BookCard from "@/app/components/BookCard";
import ContentHeader from "@/app/components/ContentHeader";
import { getAllBooks, getBooksByCategory } from "@/app/services/books-service";
import { getBookCategoryById } from "@/app/services/category-service";

export default async function Book({ searchParams }) {
  const cateId = (await searchParams).categoryId;
  const search = (await searchParams).search;
  let title = "All Books";
  let cate = null;
  if (cateId) {
    cate = await getBookCategoryById(cateId);
    title = cate.book_cate_name;
  }
  const books = await getAllBooks(cateId, search);

  return (
    <ContentHeader title={title} types="book">
      <div className="grid grid-cols-2 gap-6 overflow-y-scroll h-[90%]">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </ContentHeader>
  );
}
