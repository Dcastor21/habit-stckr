import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, IconButton } from "@mui/material";
import { defaultColor } from "@/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function HabitsCompleted() {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habits Completed</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

export default HabitsCompleted;

function HabitCard() {
  return (
    <div className="flex p-3 items-center justify-between">
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color: defaultColor.default,
          "&.Mui-checked": { color: defaultColor.default },
        }}
      />

      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 border">
        <div className="w-full">
          <div className="flex gap-2 justify-between border">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className="p-3 rounded-full w-4 h-4 bg-customRed text-white"
                height={20}
                width={20}
                icon={faCode}
              />
              <span className="">Coding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
