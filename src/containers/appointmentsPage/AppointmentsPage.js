import React, { useState } from "react";
import PropTypes from 'prop-types';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment({
      title,
      contact,
      date,
      time
    });
    setTitle('');
    setContact({});
    setDate('');
    setTime('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContactChange = (contact) => {
    setContact(contact);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={handleTitleChange}
          contact={contact}
          setContact={handleContactChange}
          date={date}
          setDate={handleDateChange}
          time={time}
          setTime={handleTimeChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objectArray={appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  addAppointment: PropTypes.func.isRequired
};
