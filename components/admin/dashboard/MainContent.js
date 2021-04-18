import React from "react";

import { AdminDashboardContext } from "../../../context/adminContext";

function Header() {
  const [adminDashContext] = React.useContext(AdminDashboardContext);
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        {/* Replace with your content */}
        <button
          // href="#"
          className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => setAdminDashContext({ app: "primeiro App" })}
        >
          Teste
        </button>
        <button
          // href="#"
          className="bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => console.log(adminDashContext)}
        >
          outro
        </button>
        <div className="px-4 py-6 sm:px-0">
          {/* {modChoosed(app)} */}
          <div className="border-4 border-dashed border-green-200 rounded-lg h-96" />
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
}

export default Header;
