import { toast } from "react-toastify";
export const ageNotify = () =>
  toast.error("Age must be a number", {
    bodyStyle: { color: "red" },
  });
export const emptyNotify = () =>
  toast.error("Please fill all the fields", {
    bodyStyle: { color: "red" },
  });
export const successNotify = () =>
  toast.success("Student added successfully", {
    bodyStyle: { color: "green" },
  });
