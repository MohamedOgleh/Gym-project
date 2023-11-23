import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CommandItem, CommandShortcut } from "@/components/ui/command";
import { UsersModel } from "@/models/UserModel";

import React from "react";

const Users = async (): Promise<UsersModel[]> => {
  const result = await fetch("http://localhost:4000/users");
  return result.json();
};
async function SearchItem() {
  const users = await Users();
  return (
    <>
      {users.map((user) => (
        <CommandItem>
          <Avatar className="border-2 border-[#206187]">
            <AvatarImage src={`/${user.image} `} alt="p" />
            <AvatarFallback>
              {user.username.slice(0, 1).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-[1rem] text-[#206187] ml-3">
            {user.username}
          </span>
          <CommandShortcut>{`Contacts: ${user.role}`}</CommandShortcut>
        </CommandItem>
      ))}
    </>
  );
}

export default SearchItem;
