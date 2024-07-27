"use client";

import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "../Components/SideBar/Sidebar";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="flex">
      <div>hello, {user?.lastName}</div> <SignOutButton>SignOut</SignOutButton>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
