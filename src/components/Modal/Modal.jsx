import { useEffect } from 'react';
import './Modal.css';

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const onPessKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onPessKeyDown);

    return () => window.removeEventListener('keydown', onPessKeyDown);
  }, [closeModal]);
  const handleClose = e => {
    if (e.target.nodeName !== 'DIV') {
      return;
    }
    closeModal();
  };

  return (
    <div onClick={handleClose} className="overlay">
      <div className="modal">{children}</div>
    </div>
  );
};
