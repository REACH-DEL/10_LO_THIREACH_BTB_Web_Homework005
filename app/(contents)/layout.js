import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-5 bg-slate-100">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-4 px-16 py-8 h-full">
        <SearchInput />
        <div className="mt-6 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
