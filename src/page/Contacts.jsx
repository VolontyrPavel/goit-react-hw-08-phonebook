import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Loader } from '../components/Loader'

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length === 0 && <p>Contacts no found</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
