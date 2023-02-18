import { CloseIcon } from '@src/assets/icons';
import useOutsideClick from '@src/hooks/useOutsideClick';
import { useModal } from '@src/lib/store';
import { useRef } from 'react';
// import { X } from 'react-feather';

function Modal() {
  const { modal, setModal } = useModal();

  const ref = useRef(null);
  const isOpen = !!modal;
  const toggle = () => {
    setModal(null);
  };
  useOutsideClick([ref], toggle);

  return (
    <div
      className={`fixed flex justify-center w-screen h-screen bg-black transition-opacity duration-75 ${
        isOpen ? 'bg-opacity-30 z-10' : 'bg-opacity-0 -z-10'
      }`}
    >
      <div
        ref={ref}
        className={`z-20 relative top-20 w-full h-min ${
          modal?.maxWidth ?? 'max-w-3xl'
        } rounded dark:bg-dark1 bg-light1 shadow-lg`}
      >
        <div className="w-100 border-b px-4 h-12 flex items-center relative">
          <h2>{modal?.title}</h2>
          <button
            tabIndex={-1}
            onClick={toggle}
            className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded leading-none"
          >
            <CloseIcon className="dark:fill-slate-50 fill-slate-900" />
          </button>
        </div>
        <div>{modal?.content}</div>
      </div>
    </div>
  );
}

export default Modal;
