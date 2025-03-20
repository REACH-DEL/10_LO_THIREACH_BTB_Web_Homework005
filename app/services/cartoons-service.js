export async function getAllCartoon(genrId = "", search = "") {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?query=${genrId}&search=${search}`);
  const resData = await res.json();
  if (resData.status === 200) {
    return resData.payload;
  }
  return [];
}

export async function getCartoonById(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
  );
  const resData = await res.json();
  if (resData.status === 200) {
    return resData.payload;
  }
  return {};
}

