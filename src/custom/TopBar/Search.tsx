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
    <div className="max-h-10 max-w-4xl flex-1 z-20">
      <Command className="rounded-xl border border-b-0 shadow-sm bg-[#f6f8fc]">
        <CommandInput
          placeholder="Type a name or contacts of the customer..."
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <CommandList className={`${open ? "" : "hidden"} bg-[#f6f8fc]`}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">{children}</CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default Search;
