import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { ComponentProps, ReactNode } from "react";

interface inputProps {
  inputTitle: string;
  inputPlaceHolder: string;
  type: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type props = inputProps & ComponentProps<"input">;

function Inputs({
  type,
  inputPlaceHolder,
  leftIcon,
  rightIcon,
  inputTitle,
}: props) {
  return (
    <div className="flex flex-col justify-end ">
      <Label className={`text-primary font-medium text-sm`}>{inputTitle}</Label>
      <div>
        <div
          className={`${
            leftIcon || rightIcon
              ? " w-72 border h-[40px] px-4 "
              : "w-72 border h-[40px]"
          } flex items-center gap-2 focus:border-secondary rounded-sm`}
        >
          {leftIcon}
          <Input
            type={type}
            placeholder={inputPlaceHolder}
            className={`border-none shadow-none   rounded-none `}
          />
          {rightIcon}
        </div>
        <Label className="text-secondary-foreground text-sm">error occured</Label>
      </div>
    </div>
  );
}

export default Inputs;
