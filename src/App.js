import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name: name,
      number: phoneNumber,
      email: email,
    };
    setContacts((contacts) => [...contacts, newContact]);
  };
  const addAppointment = (name, contact, date, time) => {
    const newAppt = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((appointments) => [...appointments, newAppt]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
          <ContactsPage 
            contacts={contacts} 
            addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment} 
              contacts={contacts}
              />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
