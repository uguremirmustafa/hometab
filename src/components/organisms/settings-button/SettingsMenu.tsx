import React, { useState } from 'react';
import ThemeSettings from './setting-sections/theme-settings';
import { SettingSection, settingSections } from './types';

interface IProps {
  activeTab: SettingSection;
}

function SettingsMenu(props: IProps) {
  const { activeTab } = props;
  const [activeMenu, setActiveMenu] = useState(activeTab);

  function changeActiveMenu(menuItem: SettingSection) {
    if (activeMenu !== menuItem) {
      setActiveMenu(menuItem);
    }
  }

  return (
    <div className="grid grid-cols-12">
      <ul className="col-span-3 flex flex-col border-r h-[500px]">
        {settingSections.map((x) => (
          <li
            className={`
            
            h-10 flex items-center px-4 text-md font-bold hover:dark:bg-p-700 hover:dark:text-50 cursor-pointer transition-colors 
            ${x === activeMenu ? 'dark:bg-p-800 bg-p-400' : ''}`}
            key={x}
            onClick={() => changeActiveMenu(x)}
          >
            {x}
          </li>
        ))}
      </ul>
      <div className="col-span-9 p-4">{activeMenu === 'theme' ? <ThemeSettings /> : null}</div>
    </div>
  );
}

export default SettingsMenu;
