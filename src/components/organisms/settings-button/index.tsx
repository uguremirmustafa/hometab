import { SettingsIcon } from '@src/assets/icons';
import { useModal } from '@src/lib/store';
import { useEffect } from 'react';
import SettingsMenu from './SettingsMenu';

function SettingsButton() {
  const { setModal } = useModal();

  function openSettings() {
    setModal({
      id: 'settings',
      title: 'Settings',
      content: <SettingsMenu activeTab="theme" />,
      maxWidth: 'max-w-3xl',
    });
  }
  useEffect(() => {
    openSettings();
  }, []);

  return (
    <>
      <button
        onClick={openSettings}
        className="absolute right-4 top-4 text-white p-0 hover:scale-105 hover:rotate-90 transition-all duration-300"
      >
        <SettingsIcon className="dark:fill-p-50 fill-p-900" />
      </button>
    </>
  );
}

export default SettingsButton;
