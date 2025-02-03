import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Wallet from "./Wallet";

const AllRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage user={user} />} />
      <Route path={"/wallet"} element={<Wallet />} />
    </Routes>
  );
};

export default AllRoutes;
