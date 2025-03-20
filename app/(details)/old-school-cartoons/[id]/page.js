import DetailCard from "@/app/components/DetailCard";
import DetailNav from "@/app/components/DetailNav";
import { getCartoonById } from "@/app/services/cartoons-service";

export default async function page({ params }) {
  const id = (await params).id;
  const cartoon = await getCartoonById(id);
  return (
    <div className="py-16 w-full flex flex-col items-center">
      <DetailNav type={"cartoon"} title={cartoon.ct_title} />
      <DetailCard
        title={cartoon.ct_title}
        desc={cartoon.ct_description}
        author={cartoon.ct_creator}
        image={cartoon.image}
        viewCount={cartoon.view_count}
        createdAt={cartoon.published_year.split("-")[0]}
      />
    </div>
  );
}
