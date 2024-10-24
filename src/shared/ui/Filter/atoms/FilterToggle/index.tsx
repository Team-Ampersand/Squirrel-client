import React from 'react';
import ToggleSwitch from '../../../ToggleSwitch';

interface Props {
  text: string;
}

const FilterToggle = ({ text }: Props) => {
  return (
    <div className="flex justify-between">
      <p className="text-body1 text-neutral-n10">{text}</p>
      <ToggleSwitch />
    </div>
  );
};

export default FilterToggle;
