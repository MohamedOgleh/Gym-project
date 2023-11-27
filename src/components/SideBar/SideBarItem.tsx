"use client";
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { SideBarItems } from "@/models/Items";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SideBarItem() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  interface iconsProps {
    rightIcon: ReactNode;
    leftIcon: ReactNode;
  }

  const icons: iconsProps = {
    leftIcon: <ChevronLeft className="h-5 w-5" />,
    rightIcon: <ChevronRight className="h-5 w-5" />,
  };
  // const [toggleIcon, setToggleIcon] = useState<React.ReactNode | null>(
  //   <ChevronLeft className="h-5 w-5" />
  // );

  return (
    <div className="flex flex-col gap-2 focus:text-black">
      {SideBarItems.map((item, index) => (
        <Button
          key={index}
          className={`flex justify-start gap-4 ${
            index == SideBarItems.length - 1 ? "mt-[60%]" : ""
          }  ${
            openIndex === index
              ? "bg-secondary text-[#E5F4FB] hover:bg-secondary hover:text-[#E5F4FB]"
              : "hover:text-primary hover:bg-primary-foreground"
          } 
            font-medium shadow-none rounded-sm`}
          onClick={() => {
            setOpenIndex(index);
          }}
          onFocus={() => {
            if (item.rightIcon != null) item.rightIcon = icons.leftIcon;
          }}
          onBlur={() => {
            if (item.rightIcon != null) item.rightIcon = icons.rightIcon;
          }}
        >
          {item.leftIcon}
          {item.title}
          {item.rightIcon}
        </Button>
      ))}
    </div>
  );
}

export default SideBarItem;
