import React from "react";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@clerk/nextjs";
import AllHabitsSearchBar from "./AllHabitsSearchBar";
import AllHabitsTopBar from "./AllHabitsTopBar";

function AllHabits() {
  const { user } = useUser();
  return (
    <div className="w-ful flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
      </div>
      <RightSideBar />
    </div>
  );
}

export default AllHabits;

function RightSideBar() {
  return <div className="w-[20%] bg-white"> </div>;
}
