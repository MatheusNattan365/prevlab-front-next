import React from "react";

import Navbar from "../../../components/users/dashboard/Navbar";
import Header from "../../../components/users/dashboard/Header";
import Main from "../../../components/users/dashboard/mainContent";
import { DashboardUsersProvider } from "../../../context/userContext";

export default function Dashboard() {
  return (
    <DashboardUsersProvider>
      <Navbar />
      <Header />
      <Main />
    </DashboardUsersProvider>
  );
}
