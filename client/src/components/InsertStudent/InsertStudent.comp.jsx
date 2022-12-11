import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { StudentsList } from "../StudentsList/StudentsList.comp";
import {
  ageNotify,
  emptyNotify,
  successNotify,
} from "./notifications/notifyTypes";
import "./style.css";

export const InsertStudent = () => {
  const [newStudent, setNewStudent] = useState({
    // new student object
    id: 0,
    firstName: "",
    lastName: "",
    age: "",
  });

  const addStudent = async () => {
    {
      if (
        // check if all fields are filled
        newStudent.firstName === "" ||
        newStudent.lastName === "" ||
        newStudent.age === ""
      ) {
        emptyNotify();
        return;
      } else if (isNaN(newStudent.age)) {
        // check if age is a number
        ageNotify();
        return;
      }
    }
    newStudent.id = StudentsList.length + 1; // set id to the length of the students array + 1
    try {
      // send post request to server
      await axios.post("http://localhost:3000/students", newStudent);
    } catch (error) {
      console.log(error);
    }
    successNotify(); // show success notification after adding student
  };

  return (
    <>
      <div className="form-container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, firstName: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, lastName: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            onChange={(e) => {
              setNewStudent({ ...newStudent, age: e.target.value });
            }}
            type="text"
            className="form-control"
            placeholder="Age"
          />
        </div>
        <button onClick={() => addStudent()} className="btn btn-primary">
          Add Student
        </button>
      </div>
      <ToastContainer />
    </>
  );
};
