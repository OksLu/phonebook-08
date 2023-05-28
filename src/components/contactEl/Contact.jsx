import useModal from 'hooks/useModal';
import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { CiUser, CiSquareRemove, CiEdit } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsApi';
import { Modal } from 'components/Modal/Modal';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const { showModal, toggleModal } = useModal(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contact}>
        <h3 className={css.name}>
          <CiUser />
          {name}
        </h3>
        <p className={css.number}>{phone}</p>
        <CiEdit onClick={() => toggleModal()} className={css.edit} />
        <CiSquareRemove className={css.close} onClick={handleDelete} />
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <EditContactForm
            id={id}
            name={name}
            phone={phone}
            closeModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

Contact.prototype = {
  currentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
