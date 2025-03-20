import DetailCard from "@/app/components/DetailCard";
import DetailNav from "@/app/components/DetailNav";
import { getBookById } from "@/app/services/books-service";

export default async function page({ params }) {
  const id = (await params).id;
  const book = await getBookById(id);
  return (
    <div className="py-16 w-full flex flex-col items-center">
      <DetailNav type={"book"} title={book.book_title}/>
      <DetailCard title={book.book_title} desc={book.description} author={book.book_author} image={book.image}/>
    </div>
  );
}
