import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [messagebox, setMessagebox] = useState([]);

  const [selectedId, setSelectedID] = useState("");
  let [num, setNum] = useState("");

  const value = {
    messagebox,
    setMessagebox,
    selectedId,
    setSelectedID,
    num,
    setNum,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
