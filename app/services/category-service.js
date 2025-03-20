export const getBookCategories = async () => {
  const res = await fetch(
    "https://nextjs-homework005.vercel.app/api/book_category"
  );
  const resCategory = await res.json();
  if (resCategory.status === 200) {
    return resCategory.payload;
  }
  return [];
};

export const getBookCategoryById = async (cateId) => {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book_category/search?query=${cateId}`
  );
  const resData = await res.json();
  if(resData.status === 200){
    return resData.payload;
  }
  return {}
};

export const getCartoonGenre = async () => {
  const res = await fetch(
    "https://nextjs-homework005.vercel.app/api/cartoon_genre"
  );
  const resGenre = await res.json();
  if (resGenre.status === 200) {
    return resGenre.payload;
  }
  return [];
};

export const getCartoonGenreById = async (genrId) => {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${genrId}`
  );
  const genr = await res.json();
  if (genr.status === 200) {
    return genr.payload;
  }
  return {};
};