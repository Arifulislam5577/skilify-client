import { createContext } from "react";
import { createUser, updateUser, LogOut } from "../utils/authServices.js";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const auth = { createUser, updateUser, LogOut };
  const courses = {};
  return (
    <DataContext.Provider value={{ ...auth, ...courses }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
