import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SideBarItems as items } from "@/models/Items";
import { PersonStanding } from "lucide-react";

function SideBar() {
  return (
    <div className="flex flex-col shrink-0 items-center mt-11 gap-3 h-screen w-60 text-primary-foreground   ">
      <div className="flex gap-3">
        <PersonStanding className="self-start  text-muted-foreground"/>
        <Label className=" text-muted-foreground text-md mb-3">
          Customer care
        </Label>
      </div>
      
      {items.map((item) => (
        <Button
          variant="ghost"
          className={`${
            item.title != "Logout" ? "" : ""
          } flex gap-2 justify-start w-3/4 h-10 hover:bg-secondary
           hover:text-white focus:bg-secondary focus:text-white`}
        >
          {item.icon}
          {item.title}
        </Button>
      ))}
    </div>
  );
}

export default SideBar;
