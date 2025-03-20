export async function getAllBooks(id = "", search = "") {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${id}&search=${search}`, {
    next: { revalidate: 15 },
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


