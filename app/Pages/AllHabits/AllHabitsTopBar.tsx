import React from "react";
import DarkMode from "@/app/Components/DarkMode";
import { useUser } from "@clerk/nextjs";
import AllHabitsSearchBar from "./AllHabitsSearchBar";

function AllHabitsTopBar() {
  const { user } = useUser();
  return (
    <div className="bg-white p-5 rounded-md flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi, there</span>
          <span className="font-light">, {user?.lastName}</span>
        </span>
        <span className="font-light text-[12px] text-gray-400">
          Welcome Back
        </span>
      </div>
      <div className="w-[50%] flex gap-3 justify-between">
        <AllHabitsSearchBar />
        <DarkMode />
      </div>
    </div>
  );
}

export default AllHabitsTopBar;
