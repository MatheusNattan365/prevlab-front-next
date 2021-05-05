import React from "react";

import { DashboardUsersContext } from "../../../context/userContext";

function Header() {
  const [userDashContext] = React.useContext(DashboardUsersContext);
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-green-900">
          {userDashContext ? userDashContext.app : "Nada"}
        </h1>
      </div>
    </header>
  );
}

export default Header;
