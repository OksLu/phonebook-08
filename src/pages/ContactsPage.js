import { Modal } from 'components/Modal/Modal';
import css from './ContactsPage.module.css';
import { ContactsList } from 'components/contactsList/ContactsList';
import { Filter } from 'components/filter/Filter';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelector';
import { ContactsForm } from 'components/contactsForm/ContactsForm';
import useModal from 'hooks/useModal';

const Contacts = () => {
  const userName = useSelector(selectUser);
  const { toggleModal, showModal } = useModal(false);

  return (
    <section className={css.contactSection}>
      <h2>Hello, {userName.name}</h2>
      <button type="button" onClick={toggleModal} className={css.modalBtn}>
        Add contact
      </button>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <ContactsForm closeModal={toggleModal} />
        </Modal>
      )}

      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
    </section>
  );
};

export default Contacts;
