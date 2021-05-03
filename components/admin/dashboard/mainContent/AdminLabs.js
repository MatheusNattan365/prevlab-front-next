import React from "react";

import LabForm from "./components/LabForm";

function AdminLabs() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="container" style={{ height: 700, overflow: "auto" }}>
          <LabForm />
        </div>
      </div>
    </div>
  );
}

export default AdminLabs;
