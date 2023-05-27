import { Modal } from 'components/Modal/Modal';
import css from './ContactsPage.module.css';
import { ContactsList } from 'components/contactsList/ContactsList';
import { Filter } from 'components/filter/Filter';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelector';
import { ContactsForm } from 'components/contactsForm/ContactsForm';

const Contacts = () => {
  const userName = useSelector(selectUser);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = event => {
    if (event.target.nodeName !== 'DIV' && event.target.nodeName !== 'BUTTON') {
      return;
    }
    setShowModal(prevState => !prevState);
  };
  return (
    <section className={css.contactSection}>
      <h2>Hello, {userName.name}</h2>
      <button type="button" onClick={openModal} className={css.modalBtn}>
        Add contact
      </button>
      {showModal && (
        <Modal closeModal={closeModal} children={<ContactsForm />} />
      )}

      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
    </section>
  );
};

export default Contacts;
