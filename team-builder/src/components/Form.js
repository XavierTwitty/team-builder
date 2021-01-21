import react, { useState } from "react";

const Form = (props) => {
  // const { form, setForm } = props;
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.setMembers(...props.members, form);
        setForm({ name: "", email: "", role: "" });
        console.log("post submited", props.members);
      }}
    >
      <label htmlFor="name"> Name: </label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name Here"
        value={form.name}
        onChange={changeHandler}
      />
      <label htmlFor="email"> Email: </label>
      <input
        type="email"
        name="email"
        placeholder="Enter Email Here"
        value={form.email}
        onChange={changeHandler}
      />
      <label htmlFor="role" />
      <select name="role" onChange={changeHandler}>
        <option value="Student"> Student </option>
        <option value="Teacher"> Teacher </option>
        <option value="Coach"> Coach </option>
      </select>
      <button type="submit"> Submit </button>
    </form>
  );
};
export default Form;
