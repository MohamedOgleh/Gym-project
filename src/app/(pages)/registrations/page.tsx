import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function Page() {
  return (
    <Card className="flex flex-col justify-start w-full h-[600px] mt-11 mr-20 
     bg-transparent border shadow-none">
      <div className="flex ">
        {/* <Image
          src="/transparent_logo.png"
          alt="logo-image"
          width={80}
          height={80}
        /> */}
        <CardHeader >
          <CardTitle> REGISTRATION FORM</CardTitle>
          <div className="flex justify-between">
            <CardDescription>Fill all required fileds</CardDescription>
          </div>
          <Separator />
        </CardHeader>
      </div>
      <CardContent>
        <div className="flex gap-5 ">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-primary-foreground">first name*</Label>
            <Input id="name" placeholder="Enter first name" className="border-primary text-muted-foreground" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-primary-foreground">middle name*</Label>
            <Input id="name" placeholder="Enter middle name" className="border-primary text-muted-foreground" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-primary-foreground">last name*</Label>
            <Input id="name" placeholder="Enter last name" className="border-primary text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Page;
