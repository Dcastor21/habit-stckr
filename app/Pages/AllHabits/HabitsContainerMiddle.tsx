import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { defaultColor } from "@/colors";
import { Checkbox, IconButton } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function HabitsContainerMiddle() {
  return (
    <div className="p-3">
      <HabitCard />
    </div>
  );
}

function HabitCard() {
  return (
    <div className="flex p-3 items-center justify-between border">
      {/* the rounded checkbox */}
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color: defaultColor.default,
          "&.Mui-checked": {
            color: defaultColor.default,
          },
        }}
      />
      <div className="flex jutify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 border">
        <div className="w-full">
          {/* the Icon and the name of the habit */}
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className=" p-3 rounded-full w-4 h-4 bg-customRed text-white"
                height={20}
                width={20}
                icon={faCode}
              />
              <span className=" ">Coding</span>
            </div>
          </div>
          {/* the Areas tags */}
          <div className="flex gap-2 mt-2">
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-white text-[12px] rounded-md px-2"
            >
              <span className="text-customRed">Area1</span>
            </div>
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-white text-[12px] rounded-md px-2"
            >
              <span className="text-customRed">Area2</span>
            </div>
          </div>
        </div>
        {/* div for three dots buttton */}
        <div className="w-10 flex items-center justify-center">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
