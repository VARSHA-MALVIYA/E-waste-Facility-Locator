import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  const handleClose = () => {
    setIsOpenState(false);
    onClose && onClose();
  };

  return (
    <>
      {isOpenState && (
        <div className="fixed inset-0 overflow-y-auto z-[1000]">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative p-8 bg-white rounded-lg">
              <button
                className="absolute top-0 right-0 p-2 text-lg"
                onClick={handleClose}
              >
                &times;
              </button>
              <div className="modal-content">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
