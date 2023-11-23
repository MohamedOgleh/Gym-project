import React from "react";
import Logo from "./Logo";

import LeftIcons from "./LeftIcons";
import Search from "./Search";
import SearchItem from "./SearchItem";

function TopBar() {
  return (
    <div className="flex justify-between items-center h-20 px-4 py-2 gap-10">
      <Logo />
      <Search >
        <SearchItem />
      </Search>
      <LeftIcons />
    </div>
  );
}

export default TopBar;
