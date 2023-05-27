import './Modal.css';

export const Modal = ({ children, closeModal }) => (
  <div onClick={closeModal} className="overlay">
    <div className="modal">{children}</div>
  </div>
);
