export const DashboardCustomerContext = React.createContext([false, () => {}]);

export const DashboardCustomerProvider = ({ children }) => {
  const [state, setState] = React.useState({ app: "Dashboard" });

  return (
    <DashboardCustomerContext.Provider value={[state, setState]}>
      {children}
    </DashboardCustomerContext.Provider>
  );
};
