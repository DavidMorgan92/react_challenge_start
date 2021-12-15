import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = ({
  contacts,
  onChange
}) => {
  return (
    <select onChange={onChange}>
      <option value={-1}>-- No contact --</option>
      {
        contacts.map((c, index) => <option key={index} value={index}>{c.name}</option>)
      }
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
