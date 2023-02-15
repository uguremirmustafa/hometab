import React from 'react';
import SettingsButton from '../settings-button';
import ModeSwitcher from '../mode-switcher/ModeSwitcher';

function ConfigBar() {
  return (
    <div className="absolute top-4 right-4 flex gap-4">
      <ModeSwitcher />
      <SettingsButton />
    </div>
  );
}

export default ConfigBar;
