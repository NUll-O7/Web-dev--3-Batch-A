import React from "react";

function Form() {
  return (
    <form>
      <label>Name :</label>
      <input type="text" />

      <label>Email :</label>
      <input type="email" />

      <label>password :</label>
      <input type="password" />

      <button type="submit">Submit From</button>
    </form>
  );
}

export default Form;
