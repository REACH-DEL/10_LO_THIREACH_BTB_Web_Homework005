export async function getAllBooks() {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/book", {
    next: { revalidate: 30 },
  });
  const resBooks = await res.json();
  if (resBooks.status === 200) {
    return resBooks.payload;
  }
  return [];
}

export async function getBookById(bookId) {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${bookId}`);
  const resBook = await res.json();
  if(resBook.status === 200){
    return resBook.payload;
  }
  return {};
}

export async function getBooksByCategory(cateId){
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${cateId}`);
  const books = await res.json();
  if (books.status === 200){
    return books.payload;
  }
  return [];
}
