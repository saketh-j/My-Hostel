import "./style.css";
import { useRef } from "react";
import SignUp from "./Signup";
import Login from "./Login";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Attendance from "./Components/Attendance";
export default function App() {
  localStorage.setItem("attendance",JSON.stringify([{}]))
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attendance/:name" element={<Attendance />} />
          <Route path="/dashboard/:Email" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}