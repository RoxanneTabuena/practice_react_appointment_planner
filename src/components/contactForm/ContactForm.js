import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  function handleNameChange({target}){
    setName(target.value)
  } 
  function handlePhoneChange({target}){
    setPhone(target.value)
  } 
  function handleEmailChange({target}){
    setEmail(target.value)
  } 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input 
        value={name}
        id="name"
        type="text"
        onChange={handleNameChange}
        placeholder=""
      />
      <label for="phone">Phone: </label>
      <input 
        value={phone}
        id="phone"
        type="text"
        onChange={handlePhoneChange}
        placeholder=""
        pattern="(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})"
      />
      <label for="email">Email: </label>
      <input 
        value={email}
        id="email"
        type="text"
        onChange={handleEmailChange}
        placeholder=""
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

