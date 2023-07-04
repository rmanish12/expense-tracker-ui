import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../login";
import Register from "../register";

const Shell = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Shell;
