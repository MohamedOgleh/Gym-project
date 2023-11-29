import { Bell, LogOut } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function TopBar() {
  return (
    <div className="flex gap-4 items-center justify-end mr-5">
      <div
        className="flex gap-2 items-center bg-primary py-1 px-3 rounded-xl hover:bg-primary hover:text-primary-foreground focus:bg-secondary 
      focus:text-primary-foreground"
      >
        <Avatar>
          <AvatarImage src="/female2.jpg" width={10} height={10} />
          <AvatarFallback>Mo</AvatarFallback>
        </Avatar>
        <Label className="hover:text-primary text-xl">Ogleh</Label>
      </div>
      {/* notification */}
      <div
        className=" bg-red-950 w-12 justify-center hover:bg-primary hover:text-primary-foreground focus:bg-secondary 
      focus:text-primary-foreground"
      >
        <div
          className="flex items-center justify-center h-5 w-5 text-[14px] rounded-full bg-secondary 
        text-primary-foreground font-medium relative top-[10px] left-[10px] ml-2"
        >
          9+
        </div>
        <Bell />
      </div>
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-primary hover:text-primary-foreground focus:bg-secondary 
      focus:text-primary-foreground border-none"
      >
        <LogOut />
      </Button>
    </div>
  );
}
