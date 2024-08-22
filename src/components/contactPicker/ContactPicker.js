import React from "react";

export const ContactPicker = ({setContact, contacts, contact}) => {
  const handleChange = ({ target }) => {
    const contact = contacts.find(contact => contact.name === target.value)
    setContact(contact)
  };
  return (
    <select onChange={handleChange}>
      <option value="">Please Select</option>
      {
       contacts.map( (contact,index) => {
           return <option value={contact.name} key={index}>{contact.name}</option>
        })
       }
    </select>
  );
};