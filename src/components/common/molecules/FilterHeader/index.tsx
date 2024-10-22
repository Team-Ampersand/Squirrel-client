import React from 'react';

interface Props {
  text: string;
}

const FilterHeader = ({ text }: Props) => {
  return (
    <div className="flex justify-between">
      <p className="text-h5 text-neutral-n10">{text}</p>
      <p className="text-body3 text-neutral-n20">초기화</p>
    </div>
  );
};

export default FilterHeader;
