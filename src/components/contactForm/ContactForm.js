import React from "react";
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' value={name} onChange={setName} />
      <input type='text' placeholder='Phone Number' value={phone} onChange={setPhone} />
      <input type='text' placeholder='Email Address' value={email} onChange={setEmail} />
      <input type='submit' />
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
