
import Profile from "./Profile";
import { Bell, Moon, MoonIcon, Settings, Sun, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function LeftIcons() {
  return (
    <div className="flex items-center gap-5 text-primary-foreground">
      <Profile />
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-secondary hover:text-white"
        >
          <Bell />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-secondary hover:text-white"
        >
          <User2 />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-secondary hover:text-white"
        >
          <Sun />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-secondary hover:text-white"
        >
          <Settings />
        </Button>
      </div>
    </div>
  );
}

export default LeftIcons;
