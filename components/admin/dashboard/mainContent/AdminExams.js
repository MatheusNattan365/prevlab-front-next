import React from "react";

import ExamsForm from "./components/ExamsForm";

function AdminExams() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="container">
          <ExamsForm />
        </div>
      </div>
    </div>
  );
}

export default AdminExams;
