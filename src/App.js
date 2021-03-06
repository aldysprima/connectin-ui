import { useEffect } from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import ForgetPassword from "./Pages/ForgetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    Axios.get(process.env.REACT_APP_API + "/api/auth/keeplogin", {
      headers: { "auth-token": token },
    })
      .then((respond) => {
        dispatch({ type: "LOGIN", payload: respond.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const global = useSelector((state) => state);
  console.log("GLOBAL : ", global);
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="bottom-center" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
