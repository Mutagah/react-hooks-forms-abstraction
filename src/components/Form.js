import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName : "John",
    lastName : "Henry",
    admin : false
  })

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if(event.target.type === "checkbox")
    {
      value = event.target.checked
    }
    setFormData({
      //copying all key value pairs from formData object
      ...formData,
      //overwriting the lastName key with a new value
      [name] : value})
  }
  function handleSubmit(event){
    event.preventDeafault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* The name in our input fields have to match the keys in our state
          The values can now be accessed as event.target.name
      */}
      <input type="text" onChange={handleChange} name="firstName" value={formData.firstName} />
      <input type="text" onChange={handleChange} name="lastName" value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
