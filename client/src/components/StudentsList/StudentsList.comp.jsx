import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import "./style.css";

export const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // simulate slow network

  const getStudents = async () => {
    setLoading(true);
    let studentsArr = await axios.get("http://localhost:3000/students");
    await sleep(2200); // simulate slow network
    setStudents(studentsArr.data); //
    setLoading(false);
  };
  // get students on load
  useEffect(() => {
    getStudents();
  }, []);
  // remove student by sending delete request to server
  const handleRemove = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3000/students/${id}`);
    getStudents(); // update students list
  };

  {
    if (loading) {
      // show spinner while loading
      return (
        <div className="spinner">
          <HashLoader size={80} color="#36d7b7" />
        </div>
      );
    } else {
      // show students list
      return (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Age</th>
                <th scope="col">Operation</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student) => {
                  // map over students array and show each student
                  return (
                    <tr>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.age}</td>
                      <td>
                        <button
                          onClick={() => handleRemove(student.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {students.length === 0 && <h3>Sorry, No students yet</h3>}
        </>
      );
    }
  }
};
