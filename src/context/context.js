import { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const auth = {};
  const courses = {};
  return (
    <DataContext.Provider value={{ ...auth, ...courses }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
