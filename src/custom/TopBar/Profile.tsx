import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import React from "react";

function Profile() {
  return (
    <div className="flex items-center gap-2 text-primary-foreground">
      <Avatar className="border-2 w-8 h-8">
        <AvatarImage src="/male2.jpg" />
        <AvatarFallback>Mo</AvatarFallback>
      </Avatar>
      <Label className="text-lg">Ogleh</Label>
    </div>
  );
}

export default Profile;
