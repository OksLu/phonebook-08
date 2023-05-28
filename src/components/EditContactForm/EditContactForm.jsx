import { useState } from 'react';
import css from '../contactsForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsApi';

export const EditContactForm = ({ id, name, phone, closeModal }) => {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUpdatedName(value);
    }
    if (name === 'number') {
      setUpdatedPhone(value);
    }
  };

  const handleEditContact = () => {
    const updatedContact = {
      id,
      name: updatedName,
      number: updatedPhone,
    };
    console.log(updatedContact);
    dispatch(updateContact(updatedContact));
    closeModal();
  };
  return (
    <form className={css.modalForm} onSubmit={handleEditContact}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        value={updatedName}
        onChange={handleChange}
        id="name"
        className={css.modalInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        value={updatedPhone}
        onChange={handleChange}
        id="number"
        className={css.modalInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
      />
      <button className={css.addBtn} type="submit">
        EDIT
      </button>
    </form>
  );
};
