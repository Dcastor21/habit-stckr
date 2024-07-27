import React from "react";
import { useGlobalContextProvider } from "@/app/contextApi";
import { menuItemType } from "@/app/Types/MenuItemType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuSelection() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  return (
    <div className="mt-[180px]">
      {menuItems.map((menuItem: menuItemType, menuItemIdex: number) => (
        <div key={menuItemIdex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
}

function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
  const { menuItemsObject } = useGlobalContextProvider();

  return (
    <div
      className={`flex gap-2 items-center p-2 mb-3 ml-8
        cursor-pointer rounded-md w-36 ${
          menuItemProp.isSelected ? "bg-customRed text-white" : ""
        }`}
    >
      <FontAwesomeIcon
        className=""
        icon={menuItemProp.icon}
        width={20}
        height={20}
      />
      <div>{menuItemProp.name}</div>
    </div>
  );
}

export default MenuSelection;
