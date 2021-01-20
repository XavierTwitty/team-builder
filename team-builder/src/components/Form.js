import react from "react";

const From = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="name"> Name: </label>
      <input type="text" name="name" placeholder="Enter Name Here" />
      <label htmlFor="text"> Email: </label>
      <input type="email" name="email" placeholder="Enter Email Here" />
      <select></select>
      <button type="submit"> Submit </button>
    </form>
  );
};
export default From;
