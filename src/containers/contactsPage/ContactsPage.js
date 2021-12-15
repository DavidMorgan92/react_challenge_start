import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({
  contacts,
  addContact
}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateExists, setDuplicateExists] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    Also check name is not only whitespace
    */
    const trimmedName = name.trim();
    if (!duplicateExists && trimmedName) {
      addContact({trimmedName, phone, email});
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setDuplicateExists(contacts.some(c => c.name === name));
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicateExists && <p>A contact with this name already exists</p>}
        <ContactForm
          name={name}
          setName={handleNameChange}
          phone={phone}
          setPhone={handlePhoneChange}
          email={email}
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectArray={contacts} />
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
};
