import { UserButton } from "@clerk/nextjs";

import { getApiLimitCount } from "@/lib/api-limit";

import MobileSideBar from "./mobile-sidebar";

async function Navbar() {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
