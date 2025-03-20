import { Button } from "@heroui/react";

export default function BookCard({ ...book }) {
  return (
    <div className="w-[500px] h-fit pr-8 py-8 relative bg-slate-100 grid grid-cols-2 rounded-2xl shadow-lg mt-[100px]">
      <div className="flex justify-center w-full h-full relative">
        <div className="flex flex-col items-center absolute bottom-0">
          <img
            className="rounded-2xl"
            src={book.image}
            alt="image books"
            width={150}
          />
          <Button
            as="a"
            href={"/book-categories/"+book.id}
            className="bg-[#BFD7EA] text-[#0B3954] text-md rounded-2xl mt-2 hover:bg-[#3d94c3] hover:font-bold hover:text-white hover:-translate-y-1 duration-300"
          >
            READ FULL ARTICLE
          </Button>
        </div>
      </div>
      <div>
        <h1 className="">{book.book_title}</h1>
        <p className="line-clamp-6">{book.description}</p>
      </div>
    </div>
  );
}
