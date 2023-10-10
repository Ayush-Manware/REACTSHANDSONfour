import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../navbar/Home";
import Student from "../navbar/Student";
import Contact from "../navbar/Contact";
import Navbar from "../navbar/Navbar";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/student"} element={<Student />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
