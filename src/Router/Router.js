import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarComp from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MealInfo from "../pages/MealInfo/MealInfo";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/meal/:id" element={<MealInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
