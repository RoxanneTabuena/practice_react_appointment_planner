import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  purpose,
  setPurpose,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handlePurposeChange = ({target}) =>{
    setPurpose(target.value)
  }
  const handleDateChange = ({target}) =>{
    setDate(target.value)
  }
  const handleTimeChange = ({target}) =>{
    setTime(target.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="purpose">Purpose: </label>
      <input 
        type="text"
        value={purpose}
        id="purpose"
        onChange={handlePurposeChange}
      />
      <ContactPicker 
        contact={contact}
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
        required
      />
      <label for="time">Time: </label>
      <input 
        type="time"
        value={time}
        id="time"
        onChange={handleTimeChange}
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};
