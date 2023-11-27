import { ReactNode } from "react";
import {
  Banknote,
  FilePlus2,
  History,
  Home,
  AlignEndHorizontal,
  Menu,
  LogOut,
  Pause,
  DollarSign,
  ArrowBigLeft,
  ChevronRight,
  Settings,
} from "lucide-react";

interface ItemProp {
  title?: String;
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
}

export const SideBarItems: ItemProp[] = [
  { title: "Dashboard", leftIcon: <Home className="h-5 w-5" /> },
  {
    title: "Registration",
    leftIcon: <FilePlus2 className="h-5 w-5" />,
    rightIcon: <ChevronRight className="h w-5" />,
  },
  { title: "Payments", leftIcon: <DollarSign className="h-5 w-5" /> },
  { title: "Holding", leftIcon: <Pause className="h-5 w-5" /> },
  { title: "Pending ", leftIcon: <Banknote className="h-5 w-5" /> },
  { title: "History", leftIcon: <History className="h-5 w-5" /> },
  { title: "Reports", leftIcon: <AlignEndHorizontal className="h-5 w-5" /> },
  {
    title: "Settings",
    leftIcon: <Settings className="h-5 w-5" />,
    rightIcon: <ChevronRight className="h w-5" />,
  },
];

export const TopBarItems: ItemProp[] = [
  { title: "Menu", leftIcon: <Menu className="h-8 w-8" /> },
  // { title: "Registration", icon: <FilePlus2 className="h-5 w-5" /> },
  // { title: "Payments", icon: <Banknote className="h-5 w-5" /> },
  // { title: "History", icon: <History className="h-5 w-5" /> },
  // { title: "Reports", icon: <AlignEndHorizontal className="h-5 w-5" /> },
];
