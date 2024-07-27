import React from "react";
import LogoAnName from "../LogoAnName";
import MenuSelection from "./MenuSelection";

function Sidebar() {
  return (
    <div className="border-r-2 h-screen p-10 flex flex-col gap-20">
      <LogoAnName />
      <MenuSelection />
    </div>
  );
}
export default Sidebar;
