import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleNameChange = ({target}) =>{
    setName(target.value)
  }
  const handleDateChange = ({target}) =>{
    setDate(target.value)
  }
  const handleTimeChange = ({target}) =>{
    setTime(target.value)
  }

  return (
    <>
    <h2>Appointment Form</h2>
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input 
        type="text"
        value={name}
        id="name"
        onChange={handleNameChange}
      />
      <ContactPicker 
        contacts={contacts}
        setContact={setContact}
      />
      <label for="date">Date: </label>
      <input 
        type="date"
        min={getTodayString}
        value={date}
        id="date"
        onChange={handleDateChange}
      />
      <label for="time">Time: </label>
      <input 
        type="time"
        value={time}
        id="time"
        onChange={handleTimeChange}
      />
    </form>
    </>
  );
};
