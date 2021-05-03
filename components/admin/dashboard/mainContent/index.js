import React from "react";

import { AdminDashboardContext } from "../../../../context/adminContext";

import AdminDashboard from "./AdminDashboard";
import AdminPacients from "./AdminPacients";
import AdminExams from "./AdminExams";
import AdminReports from "./AdminReports";
import AdminLabs from "./AdminLabs";

function Header() {
  const [adminDashContext] = React.useContext(AdminDashboardContext);

  const currentApp = (appTitle) => {
    switch (appTitle) {
      case "Dashboard":
        return <AdminDashboard />;
      case "Labs/Convênios":
        return <AdminLabs />;
      case "Pacientes":
        return <AdminPacients />;
      case "Exames":
        return <AdminExams />;
      case "Relatórios":
        return <AdminReports />;
      default:
        break;
    }
  };
  React.useEffect(() => {}, []);
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8  ">
        {/* Replace with your content */}

        <div className="px-4 py-4 sm:px-0">
          {currentApp(adminDashContext.app)}
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
}

export default Header;
