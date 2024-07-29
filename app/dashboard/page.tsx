"use client";
import { useGlobalContextProvider } from "../contextApi";
import { menuItemType } from "../Types/MenuItemType";
import Areas from "../Pages/Areas/Areas";
import AllHabits from "../Pages/AllHabits/AllHabits";
import Statistics from "../Pages/Statistics/Statistics";
import React, { useEffect, useState } from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "../Components/SideBar/Sidebar";

function Dashboard() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const [selectMenu, setSelectedMenu] = useState<menuItemType | null>(null);
  let selectComponent = null;

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectMenu?.name) {
    case "All Areas":
      selectComponent = <Areas />;
      break;
    case "All Habits":
      selectComponent = <AllHabits />;
      break;
    case "Statistics":
      selectComponent = <Statistics />;
      break;
  }
  const { user } = useUser();
  return (
    <div className="flex bg-slate-50">
      <Sidebar />
      {selectComponent}
    </div>
  );
}

export default Dashboard;
