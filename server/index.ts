import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import express from "express";
import cors from "cors";
import { StudentsDB } from "./database/student.db";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("");
});
app.get("/students", function (req, res) {
  res.send(StudentsDB);
});

app.post("/students", function (req, res) {
  const student = req.body;
  StudentsDB.push(student);
  res.send(StudentsDB);
});

app.delete("/students/:id", function (req, res) {
  const id = req.params.id;
  const index = StudentsDB.findIndex((student) => student.id === parseInt(id));
  StudentsDB.splice(index, 1);
  res.send(StudentsDB);
});

app.listen(process.env.PORT);
