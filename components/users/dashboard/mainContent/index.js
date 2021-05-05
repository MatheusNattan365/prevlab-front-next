import React from "react";

import { DashboardUsersContext } from "../../../../context/userContext";

import PrintExams from "./printExams";

function Header() {
  const [adminDashContext] = React.useContext(DashboardUsersContext);

  const currentApp = (appTitle) => {
    switch (appTitle) {
      case "Dashboard":
        return <PrintExams />;

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
