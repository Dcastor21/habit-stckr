"use client";

import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";

function Dashboard() {
  const user = useUser();
  return (
    <div>
      hello, guest <SignOutButton>SignOut</SignOutButton>
    </div>
  );
}

export default Dashboard;
