import React from "react";

export const AdminDashboardContext = React.createContext([false, () => {}]);

export const AdminDashboardProvider = ({ children }) => {
  const [state, setState] = React.useState({ app: "Dashboard" });

  return (
    <AdminDashboardContext.Provider value={[state, setState]}>
      {children}
    </AdminDashboardContext.Provider>
  );
};
