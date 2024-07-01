"use client";

import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link className="mb-14 flex items-center pl-3" href="/dashboard">
          <div className="relative mr-4 h-8 w-8">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold">Clever boy</h1>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
