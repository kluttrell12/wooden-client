import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);
  const [userId, setUserIdState] = useState(localStorage.getItem("user_id"));
  const [isStaff, setStaffBool] = useState(localStorage.getItem("is_staff"));

  const setToken = (newToken) => {
    localStorage.setItem("auth_token", newToken);
    setTokenState(newToken);
  };

  const setUserId = (newUserId) => {
    localStorage.setItem("user_id", newUserId);
    setUserIdState(newUserId);
  };

  const setIsStaff = (isStaffBoolean) => {
    localStorage.setItem("is_staff", String(isStaffBoolean));
    setStaffBool(isStaffBoolean);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        isStaff,
        setIsStaff,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
