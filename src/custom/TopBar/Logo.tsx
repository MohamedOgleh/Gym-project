import { Label } from "@/components/ui/label";
import { Aladin } from "next/font/google";
import Image from "next/image";
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

function Logo() {
  return (
    <div className={`${aladin.className} flex items-center gap-2`}>
      <Image
        src="/transparent_logo.png"
        alt="logo-image"
        width={50}
        height={50}
      />
      <Label className="text-3xl text-primary-foreground ">TOGDHEER</Label>
      <span>
        <Label className="text-3xl text-secondary-foreground">GYM</Label>
      </span>
    </div>
  );
}

export default Logo;
