import React from "react";
import "./admin.scss";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <NavLink to={"/admin"}>Admin</NavLink>
      <h2>Admin </h2>
      <NavLink to={"createproduct"}>
        Createproduct
      </NavLink>
      <NavLink to={"manageproduct"}>
       Manageproduct
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Admin;
