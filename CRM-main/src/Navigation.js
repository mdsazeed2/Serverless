import React from "react";
import { BrowserRouter,Route,  Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import AdminDash from "./AdminDash";
import ManagerDash from "./ManagerDash";
import LeadListPage from "./LeadlistPage";
import AddLead from "./AddLead";
 
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/AdminDash" element={<AdminDash />}>
            </Route>
            <Route path="/Signup" element={<Signup />}>
            </Route>
            <Route path="/ManagerDash" element={<ManagerDash />}>
            </Route>
            <Route path="/Leadlist" element={<LeadListPage />}>
            </Route>
            <Route path="/AddLead" element={<AddLead />}>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
