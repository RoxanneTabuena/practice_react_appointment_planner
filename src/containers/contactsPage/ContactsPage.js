import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('') 
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [duplicate, setDuplicate] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate===false){
      addContact(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
    }
  };
  
  useEffect(()=>{
    const duplicate = contacts.find(contact => contact.name === name)
    if(duplicate !== undefined){
      setDuplicate(true)
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName ={setName}
          phone={phone}
          setPhone ={setPhone}
          email={email}
          setEmail ={setEmail}
          handleSubmit = {handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
