"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { GlobalContextTypes } from "./Types/GlobalContextType";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { menuItemType } from "./Types/MenuItemType";
import {
  faRectangleList,
  faChartSimple,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const GlobalContext = createContext<GlobalContextTypes>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All Habits", isSelected: true, icon: faRectangleList },
    { name: "Statistics", isSelected: false, icon: faChartSimple },
    { name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  return (
    <GlobalContext.Provider
      value={{ menuItemsObject: { menuItems, setMenuItems } }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
