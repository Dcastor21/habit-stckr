import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { defaultColor } from "@/colors";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import UserProfile from "./RightSidebar/UserProfile";
import MainStatistics from "./RightSidebar/MainStatistics";

function AllHabitsRightSideBar() {
  return (
    <div className="w-[20%] bg-white">
      <UserProfile />
      <MainStatistics />
    </div>
  );
}

export default AllHabitsRightSideBar;
