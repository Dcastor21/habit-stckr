"use client";

import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "../Components/SideBar/Sidebar";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="flex">
      <Sidebar />
      <div>hello,{user?.lastName}</div>
    </div>
  );
}

export default Dashboard;
