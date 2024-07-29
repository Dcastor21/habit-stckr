import React from "react";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@clerk/nextjs";
import AllHabitsSearchBar from "./AllHabitsSearchBar";
import AllHabitsTopBar from "./AllHabitsTopBar";
import AllHabitsRightSideBar from "./AllHabitsRightSideBar";
import HabitsContainer from "./HabitsContainer";

function AllHabits() {
  const { user } = useUser();
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
        <HabitsContainer />
      </div>
      <AllHabitsRightSideBar />
    </div>
  );
}

export default AllHabits;
