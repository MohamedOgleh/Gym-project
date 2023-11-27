import Image from "next/image";
import { Label } from "../ui/label";
import { Aladin } from "next/font/google";
import SideBarItem from "./SideBarItem";
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

function SideBar() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* logo */}
      <div className="flex flex-col gap-3 items-center justify-center mt-10">
        <Image
          src="/transparent_logo.png"
          width={80}
          height={80}
          alt="Logo"
          className="bg-primary-foreground rounded-full"
        />
        <Label
          className={`${aladin.className} text-primary-foreground text-2xl`}
        >
          TOGDHEER <span className="text-secondary-foreground">GYM</span>
        </Label>
      </div>
      {/* Menu */}
      <div className=" ">
        <SideBarItem />
      </div>
      <div className="className"></div>
    </div>
  );
}

export default SideBar;
