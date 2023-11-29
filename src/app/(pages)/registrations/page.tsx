import React from "react";

import Inputs from "./Inputs";
import { Eye, Lock } from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
function page() {
  return (
    <div className="flex justify-center items-center h-full">
      <Inputs
        inputPlaceHolder="Enter first name"
        inputTitle="First name *"
        type="text"
        // leftIcon={<Lock />}
        rightIcon={<Eye />}
        leftIcon={<Lock />}
      />

<Inputs
        inputPlaceHolder="Enter last name"
        inputTitle="Last name *"
        type="text"
        // leftIcon={<Lock />}
        // rightIcon={<Eye />}
        // leftIcon={<Lock />}
      />

<Inputs
        inputPlaceHolder="Enter last name"
        inputTitle="Middle name *"
        type="text"
        leftIcon={<PersonIcon />}
        // rightIcon={<Eye />}
        // leftIcon={<Lock />}
      />
    </div>
  );
}

export default page;
