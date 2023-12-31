"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { SideBarItems } from "@/models/Items";

function SideBarItem() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-2 focus:text-black">
      {SideBarItems.map((item, index) => (
        <Button
          key={index}
          className={`flex justify-start gap-4 ${
            openIndex === index
              ? "bg-secondary text-[#E5F4FB] hover:bg-secondary hover:text-[#E5F4FB]"
              : "hover:text-primary hover:bg-primary-foreground"
          } 
            font-medium shadow-none rounded-sm`}
          onClick={() => {
            setOpenIndex(index);
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
