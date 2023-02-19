import { SettingsIcon } from '@src/assets/icons';
import { useSettings } from '@src/components/wrappers/settings-wrapper/SettingsWrapper';
import { useModal } from '@src/lib/store';
import { useEffect } from 'react';
import SettingsMenu from './SettingsMenu';

function SettingsButton() {
  const { setModal } = useModal();
  const { colorSettings } = useSettings();

  function openSettings() {
    setModal({
      id: 'settings',
      title: 'Settings',
      content: <SettingsMenu activeTab="theme" />,
      maxWidth: 'max-w-4xl',
    });
  }
  // useEffect(() => {
  //   if (colorSettings?.pc?.id) {
  //     openSettings();
  //   }
  // }, [colorSettings?.pc?.id]);

  return (
    <button
      onClick={openSettings}
      className="text-white p-0 hover:scale-105 hover:rotate-90 transition-all duration-300"
    >
      <SettingsIcon />
    </button>
  );
}

export default SettingsButton;
