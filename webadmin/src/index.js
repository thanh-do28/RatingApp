import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./scenes/login/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
// import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/home/team' element={<Team />} />
          <Route path='/home/contacts' element={<Contacts />} />
          <Route path='/home/invoices' element={<Invoices />} />
          {/* <Route path="/form" element={<Form />} /> */}
          <Route path='/home/bar' element={<Bar />} />
          <Route path='/home/pie' element={<Pie />} />
          <Route path='/home/line' element={<Line />} />
          <Route path='/home/faq' element={<FAQ />} />
          <Route path='/home/calendar' element={<Calendar />} />
          <Route path='/home/geography' element={<Geography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
