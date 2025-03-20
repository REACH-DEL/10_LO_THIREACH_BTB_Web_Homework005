import BookCard from "@/app/components/BookCard";
import ContentHeader from "@/app/components/ContentHeader";
import { getAllBooks, getBooksByCategory } from "@/app/services/books-service";
import { getBookCategoryById } from "@/app/services/category-service";

export default async function Book({ searchParams }) {
  const cateId = (await searchParams)?.categoryId;
  let title = "All Books";
  let cate = null;
  let books = [];
  if (cateId) {
    cate = await getBookCategoryById(cateId);
    books = await getBooksByCategory(cateId);
    title = cate?.book_cate_name || "All Books";
  } else {
    books = await getAllBooks();
  }
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
