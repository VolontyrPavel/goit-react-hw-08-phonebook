import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError, selectContacts } from 'redux/selectors';
import {fetchContacts} from 'redux/operations'

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length === 0 && (<p>Contacts no found</p>)}
      <ContactList />
    </div>
  );
};
