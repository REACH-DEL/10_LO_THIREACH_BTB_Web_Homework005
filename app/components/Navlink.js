"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarItem } from "../datas/sidebarItem";
import Image from "next/image"
export default function Navlink() {
  const pathname = usePathname();
  return (
    <ul className="mt-6 space-y-1 px-5">
      {sidebarItem.map((i) => (
        <li key={i.id}>
          <Link
            href={i.id <= 3 ? i.path : ""}
            className={
              `flex gap-2 rounded-lg px-8 py-2 text-lg font-medium text-[#0B3954] hover:bg-gray-100 hover:font-bold ${pathname === i.path ? "bg-gray-200": "bg-none"}`
            }
          >
            <Image src={i.icon} width={22} height={22} alt="icon" className="w-auto h-auto"/>
            {i.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
