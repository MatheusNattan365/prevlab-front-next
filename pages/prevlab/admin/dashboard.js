import React from "react";

import Navbar from "../../../components/admin/dashboard/Navbar";
import Header from "../../../components/admin/dashboard/Header";
import Main from "../../../components/admin/dashboard/MainContent";
import { AdminDashboardProvider } from "../../../context/adminContext";

export default function Dashboard() {
  return (
    <AdminDashboardProvider>
      <Navbar />
      <Header />
      <Main />
    </AdminDashboardProvider>
  );
}
