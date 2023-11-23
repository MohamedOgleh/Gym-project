"use client";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

function Search({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-h-9 max-w-4xl flex-1">
      <Command>
        <CommandInput
          placeholder="Type a name or contacts of the customer..."
          className="border-b-0"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <CommandList className={`${open ? "" : "hidden"} `}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">{children}</CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default Search;
