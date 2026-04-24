import { useContext } from "react";
import { AuthContext } from "../features/auth/pages/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within Providers");
  }

  return context;
};

export default useAuth;
