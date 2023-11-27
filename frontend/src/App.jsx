import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/edit/:id" element={<Edit />} />
      <Route path="/users/create" element={<AddUser />} />
      <Route path="/users/delete/:id" element={<Delete />} />
    </Routes>
  );
};

export default App;
