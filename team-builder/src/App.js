import ReactDom from "react-dom";
import Member from "./components/Member";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [members, setMembers] = useState([
    {
      name: "Bobby Joe",
      email: "gobo@ggg.com",
      role: "Student",
    },
  ]);
  // const addForm = (newForm) => {
  //   setForm([...form, newForm]);
  // };
  console.log(members);
  return (
    <div>
      <h1>Member Form</h1>
      <Form members={members} setMembers={setMembers} />
      {members.map((member) => (
        <Member detail={member} />
      ))}
    </div>
  );
}
export default App;
