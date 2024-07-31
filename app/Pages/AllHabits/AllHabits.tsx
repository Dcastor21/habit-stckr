import React from "react";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllHabitsSearchBar from "./AllHabitsSearchBar";
import AllHabitsTopBar from "./AllHabitsTopBar";
import AllHabitsRightSideBar from "./AllHabitsRightSideBar";
import HabitsContainer from "./HabitsContainer";
import HabitsCompleted from "./HabitsCompleted";

function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
        <HabitsContainer />
        <HabitsCompleted />
      </div>
      <AllHabitsRightSideBar />
    </div>
  );
}

export default AllHabits;
