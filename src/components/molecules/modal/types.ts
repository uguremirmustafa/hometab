import { ReactNode } from 'react';

export interface ModalProps {
  id: 'settings' | null;
  title?: string;
  content?: ReactNode;
  maxWidth?: string;
  type?: 'modal' | 'sidebar';
  maxHeight?: string;
}
