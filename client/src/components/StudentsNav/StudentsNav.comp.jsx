import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const StudentsNav = () => {
  return (
    <div className="container">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/addstudent">
        <h4>Add Student</h4>
      </Link>
    </div>
  );
};
