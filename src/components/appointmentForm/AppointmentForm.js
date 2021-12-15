import React from "react";
import PropTypes from 'prop-types';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleContactChange = (e) => {
    const selectedContact = e.target.value > -1 ? contacts[e.target.value] : null;
    setContact(selectedContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={setTitle} />
      <ContactPicker contacts={contacts} onChange={handleContactChange} />
      <input type='date' value={date} onChange={setDate} min={getTodayString()} />
      <input type='time' value={time} onChange={setTime} />
      <input type='submit' />
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  setContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
