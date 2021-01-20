import ReactDom from "react-dom";
import Member from "./components/Member";
import From from "./components/Form";
import { useState } from "react";

function App() {
  const [form, setForm] = useState([
    {
      name: "Bobby Joe",
      email: "gobo@ggg.com",
      role: "Student",
    },
  ]);

  return (
    <div>
      <h1>Member Form</h1>
      <From />
      <Member />
    </div>
  );
}
