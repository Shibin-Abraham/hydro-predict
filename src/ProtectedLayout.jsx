// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./Components/Contexts/AuthContext";
// import TopBar from "./Components/TopBar/TopBar";
// import NavBar from "./Components/NavBar/NavBar";
// import Wrapper from "./Components/AtomicDesign/Atom/Wrapper/Wrapper";

import { useContext } from "react";
import { AuthContext } from "./Components/Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import Wrapper from "./Components/AtomicDesign/Atom/Wrapper/Wrapper";
import NavBar from "./Components/NavBar/NavBar";


// eslint-disable-next-line react/prop-types
const ProtectedLayout = ({ children, theme }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.isAuthorized) {
    return <Navigate to="/login" />;
  }

  // If authorized, render the layout with TopBar, NavBar, and the child component
  return (
    <>
      <TopBar theme={theme} />
      <Wrapper className="flex w-screen h-[87vh]">
        <NavBar theme={theme} />
        {children}
      </Wrapper>
    </>
  );
};

export default ProtectedLayout;