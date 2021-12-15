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
      <input type='text' value={name} onChange={setName} />
      <input type='text' value={phone} onChange={setPhone} />
      <input type='text' value={email} onChange={setEmail} />
      <input type='submit' />
    </form>
  );
};
