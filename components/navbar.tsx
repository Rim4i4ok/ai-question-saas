import { Menu } from "lucide-react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="flex items-center py-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </div>
  );
}

export default Navbar;
