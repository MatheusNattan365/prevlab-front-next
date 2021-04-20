import React from "react";

import PacientForm from "./components/PacienteForm";

function AdminPacients() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="container" style={{ height: 700, overflow: "auto" }}>
          <PacientForm />
        </div>
      </div>
    </div>
  );
}

export default AdminPacients;
