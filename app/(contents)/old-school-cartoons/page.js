import CartoonCard from "@/app/components/CartoonCard";
import ContentHeader from "@/app/components/Content";
import {
  getAllCartoon,
  getCartoonsByGenr,
} from "@/app/services/cartoons-service";
import { getCartoonGenreById } from "@/app/services/category-service";

export default async function Cartoon({ searchParams }) {
  const genrId = (await searchParams).categoryId;
  const search = (await searchParams).search;
  let title = "Old School Cartoons";
  if (genrId) {
    const genr = await getCartoonGenreById(genrId);
    title = genr.cartoon_genre;
  }
  const cartoons = await getAllCartoon(genrId, search);

  return (
    <ContentHeader
      title={title}
      types={"cartoon"}
      children={
        <div className="grid grid-cols-3 gap-16 overflow-y-scroll h-[90%] p-10">
          {cartoons.map((cartoon) => (
            <CartoonCard key={cartoon.id} {...cartoon} />
          ))}
        </div>
      }
    />
  );
}
