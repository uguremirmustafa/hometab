import RadioGroup from '@src/components/atoms/radio-group';
import useLocalState from '@src/hooks/useLocalState';
import React, { ComponentProps, useEffect } from 'react';
import { ColorName, colors } from './types';

function ThemeSettings() {
  const [primary, setPrimary] = useLocalState<ColorName>('hpc', 'chestnut-rose');
  const [secondary, setSecondary] = useLocalState<ColorName>('hsc', 'pink-salmon');

  useEffect(() => {
    if (window) {
      window.document.documentElement.setAttribute('data-primary-color', primary);
      window.document.documentElement.setAttribute('data-secondary-color', secondary);
    }
  }, [primary, secondary]);

  return (
    <div>
      <RadioGroup<ColorName>
        label="Select primary color"
        options={getRadioOptions(colors, 'primary')}
        value={primary}
        setValue={setPrimary}
      />
    </div>
  );
}

export default ThemeSettings;

const getRadioOptions = (
  colors: readonly ColorName[],
  colorType: 'primary' | 'secondary'
): ComponentProps<typeof RadioGroup>['options'] => {
  return colors.map((c) => ({ id: `${colorType}-${c}`, label: c, value: c }));
};
