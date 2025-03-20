export async function getAllCartoon() {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
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

export const getCartoonsByGenr = async (genrId) => {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?genre=${genrId}`
  );
  const cartoons = await res.json();
  if(cartoons.status === 200){
    return cartoons.payload;
  }
  return []
};