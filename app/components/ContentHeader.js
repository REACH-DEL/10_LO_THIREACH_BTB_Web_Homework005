import CategorySelect from "./CategorySelect";
import {
  getBookCategories,
  getCartoonGenre,
} from "../services/category-service";

export default async function ContentHeader({ title, types, children }) {
  let options = [];

  if (types === "book") {
    options = await getBookCategories();
  } else if (types === "cartoon") {
    options = await getCartoonGenre();
  }

  return (
    <div className="w-full bg-white rounded-[50px] h-screen px-14 py-12">
      <div className="flex justify-between items-center w-full">
        <div className="bg-slate-100 px-6 py-2 rounded-xl w-fit h-fit">
          <span className="text-lg font-semibold text-[#087E8B]">{title}</span>
        </div>
        {types ? <CategorySelect options={options}/> : null}
      </div>
      <hr color="[#0B3954]" className="mt-2 text-[2px]"/>
      {children}
    </div>
  );
}
