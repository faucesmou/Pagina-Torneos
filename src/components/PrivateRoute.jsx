import { useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./Home";
import  Novedades  from "../pages/novedades/Novedades";
import  Perfil  from "../pages/perfil/Perfil";



const PrivateRoute = ({ children, ...props }) => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
    <Routes>
    <Route path="/novedades/*" element={<Novedades />} />
    <Route path="/*" element={<Home />} />
    <Route path="/perfil/*" element={<Perfil />} />
    </Routes>
  </>
  );
 
  //este funciona pero quedo "atrapado": <Navigate to="/novedades"/>;

  //esto de abajo no sé si esta generando error: consultar antes de dejar así.
  /* return <Route {...props}>{children}</Route>; */
};

export default PrivateRoute;