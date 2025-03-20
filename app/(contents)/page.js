import ContentHeader from "../components/ContentHeader";
import HomepageCard from "../components/HompageCard";

export default function Home() {
  return (
    <ContentHeader
      title={"Homepage"}
      children={
        <div className="flex justify-center mt-32 gap-16 h-full">
          <HomepageCard
            tag={"Book"}
            detail={"View All Available Books"}
            path={"/book-categories"}
            image={"book"}
          />
          <HomepageCard
            tag={"Cartoon"}
            detail={"View All Available Cartoons"}
            path={"/old-school-cartoons"}
            image={"cartoon"}
          />
        </div>
      }
    />
  );
}
