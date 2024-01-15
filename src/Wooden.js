import { useContext } from "react";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews";
import { AuthContext } from "./components/auth/authProvider";

export const Wooden = () => {
  const {token} = useContext(AuthContext)
  
  return (
    <>
     { token ? <NavBar /> : null}
      <ApplicationViews />
    </>
  );
};
