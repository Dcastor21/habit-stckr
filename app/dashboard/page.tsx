"use client";

import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";

function Dashboard() {
  const user = useUser();
  return (
    <div>
      hello, {user?.fullName} <SignOutButton>SignOut</SignOutButton>
    </div>
  );
}

export default Dashboard;
