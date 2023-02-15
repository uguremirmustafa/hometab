import { ModalProps } from '@src/components/molecules/modal/types';
import { create } from 'zustand';

interface AppState {
  modal: ModalProps | null;
  setModal: (modal: ModalProps | null) => void;
}

const useApp = create<AppState>((set) => ({
  modal: null,
  setModal: (modal) => set((state) => ({ modal })),
}));

export const useModal = () => {
  const modal = useApp((state) => state.modal);
  const setModal = useApp((state) => state.setModal);
  const closeModal = () => setModal(null);

  return { modal, setModal, closeModal };
};
