import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors'

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
      phone: phone,
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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={phone}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
