import Image from "next/image";
import Navlink from "./Navlink";

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white ">
      <div className="px-4 py-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 rounded-full overflow-hidden">
            <img src="images/boy-profile.jpg" alt="" />
          </div>
          <h1 className="text-2xl font-medium pt-2 text-[#0B3954]">
            Black Monster
          </h1>
          <p className="text-xl font-medium text-[#087E8B]">
            blackmonster@gmail.com
          </p>
        </div>
        <Navlink />
        <div className="mx-5 mt-10 flex gap-2 rounded-lg px-8 py-3 text-xl font-medium text-[#0B3954] bg-gray-100 hover:bg-slate-200">
          <Image src={"/icons/setting.svg"} width={24} height={24} alt="setting icon"/>
          <span className="">Settings</span>
        </div>
      </div>
    </aside>
  );
}
