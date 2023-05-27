import css from './ContactsList.module.css';
import { Contact } from 'components/contactEl/Contact';
import {
  filteredContacts,
  getError,
  getIsLoading,
} from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/contactsApi';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {contacts.map(({ id, name, number }) => {
        return (
          <>
            <li key={id} className={css.item}>
              <Contact id={id} name={name} phone={number} />
            </li>
          </>
        );
      })}
    </ul>
  );
};
