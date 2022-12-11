import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import {
  StudentsNav,
  InsertStudent,
  StudentsList,
} from "./components/compIndex.ts";
function App() {
  return (
    <div className="App">
      <StudentsNav />
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/addstudent" element={<InsertStudent />} />
      </Routes>
    </div>
  );
}

export default App;
