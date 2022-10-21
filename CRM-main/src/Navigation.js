import React from "react";
import { BrowserRouter,Route,  Routes } from "react-router-dom";
import LeadListPage from "./LeadlistPage";
import AddLead from "./AddLead";
 
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LeadListPage />}>
            </Route>
            <Route path="/AddLead" element={<AddLead />}>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
