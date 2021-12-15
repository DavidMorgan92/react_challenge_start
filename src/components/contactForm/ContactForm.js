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
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' value={name} onChange={setName} />
      <input type='text' placeholder='Phone Number' value={phone} onChange={setPhone} />
      <input type='text' placeholder='Email Address' value={email} onChange={setEmail} />
      <input type='submit' />
    </form>
  );
};
