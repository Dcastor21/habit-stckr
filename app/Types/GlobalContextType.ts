import { menuItemType } from "./MenuItemType";
import { Dispatch, SetStateAction } from "react";

export type GlobalContextTypes = {
  menuItemsObject: {
    menuItems: menuItemType[];
    setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  };
};
