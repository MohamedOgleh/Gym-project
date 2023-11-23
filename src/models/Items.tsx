import { ReactNode } from "react";
import {
  Banknote,
  FilePlus2,
  History,
  Home,
  AlignEndHorizontal,
  Menu,
} from "lucide-react";

interface ItemProp {
  title?: String;
  icon: ReactNode;
}

export const SideBarItems: ItemProp[] = [
  { title: "Home", icon: <Home className="h-5 w-5" /> },
  { title: "Registration", icon: <FilePlus2 className="h-5 w-5" /> },
  { title: "Payments", icon: <Banknote className="h-5 w-5" /> },
  { title: "History", icon: <History className="h-5 w-5" /> },
  { title: "Reports", icon: <AlignEndHorizontal className="h-5 w-5" /> },
];

export const TopBarItems: ItemProp[] = [
  { title: "Menu", icon: <Menu className="h-8 w-8" /> },
  // { title: "Registration", icon: <FilePlus2 className="h-5 w-5" /> },
  // { title: "Payments", icon: <Banknote className="h-5 w-5" /> },
  // { title: "History", icon: <History className="h-5 w-5" /> },
  // { title: "Reports", icon: <AlignEndHorizontal className="h-5 w-5" /> },
];
