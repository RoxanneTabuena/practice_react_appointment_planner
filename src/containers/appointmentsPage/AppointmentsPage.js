import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [purpose, setPurpose] = useState('')
  const [contact, setContact] = useState({})
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(purpose, contact, date, time)
    setPurpose('')
    setContact({})
    setDate('')
    setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          purpose={purpose}
          setPurpose={setPurpose}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};