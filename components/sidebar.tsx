"use client";

import { SettingsIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { tools } from "@/constants";
import { cn } from "@/lib/utils";

import FreeCount from "./free-counter";

const montserrat = Montserrat({ weight: "600", subsets: ["cyrillic"] });

const routes = [
  ...tools,
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
];

type SidebarProps = {
  apiLimitCount: number;
};

function Sidebar({ apiLimitCount = 0 }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link className="mb-14 flex items-center pl-3" href="/dashboard">
          <div className="relative mr-4 h-8 w-8">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Clever boy
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-400",
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCount apiLimitCount={apiLimitCount} />
    </div>
  );
}

export default Sidebar;
