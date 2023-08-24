import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'phone':
        setPhone(e.target.value);
        break;

      default:
        break;
    }
  };

  const contactsInStore = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: phone,
    };
    const findedContact = contactsInStore.find(
      contactInStore =>
        contactInStore.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (findedContact) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={name}
        />
        <input
          className={css.input}
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={phone}
        />
        <button type="submit" name="next" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
