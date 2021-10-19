import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextComponent";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
