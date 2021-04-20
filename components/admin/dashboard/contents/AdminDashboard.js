import React from "react";

import TimeLine from "./components/timeLine";

function AdminDashboard() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="container" style={{ height: 700, overflow: "auto" }}>
          <TimeLine />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
