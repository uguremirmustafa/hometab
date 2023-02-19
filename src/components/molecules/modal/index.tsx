import { CloseIcon } from '@src/assets/icons';
import useOutsideClick from '@src/hooks/useOutsideClick';
import { useModal } from '@src/lib/store';
import classNames from 'classnames';
import { useRef } from 'react';
// import { X } from 'react-feather';

function Modal() {
  const { modal, setModal } = useModal();

  const isSidebar = modal?.type === 'sidebar';

  const ref = useRef(null);
  const isOpen = !!modal;
  const toggle = () => {
    setModal(null);
  };
  useOutsideClick([ref], toggle);

  return (
    <div
      className={classNames(
        isOpen ? 'bg-opacity-30 z-10' : 'bg-opacity-0 -z-10',
        'fixed flex justify-center w-screen h-screen bg-black transition-opacity duration-75'
      )}
    >
      <div
        ref={ref}
        className={classNames(
          'z-20 w-full  dark:bg-dark1 bg-light1 shadow-lg',
          modal?.maxWidth ?? 'max-w-3xl',
          !isSidebar && 'top-20 h-min rounded relative',
          !isSidebar && modal?.maxHeight,
          isSidebar && 'fixed right-0 h-screen top-0'
        )}
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
        <div className="h-full">{modal?.content}</div>
      </div>
    </div>
  );
}

export default Modal;
