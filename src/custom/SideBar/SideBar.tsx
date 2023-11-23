import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SideBarItems as items } from "@/models/Items";

function SideBar() {
  return (
    <div className="flex flex-col items-center mt-11 gap-3 h-screen w-60 text-primary-foreground ">
      <Label className="self-start text-muted-foreground text-md ml-6 mb-4">
        Customer care
      </Label>
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
