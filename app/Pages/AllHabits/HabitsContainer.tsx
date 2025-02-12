import React from "react";
import HabitsContainerTop from "./HabitsContainerTop";
import HabitsContainerMiddle from "./HabitsContainerMiddle";
import HabitsCompleted from "./HabitsCompleted";

function HabitsContainer() {
  return (
    <div className="mt-5 bg-white rounded-md p-5 h-[500px] flex flex-col gap-3">
      <HabitsContainerTop />
      {/* <HabitsContainerMiddle /> */}
    </div>
  );
}

export default HabitsContainer;
