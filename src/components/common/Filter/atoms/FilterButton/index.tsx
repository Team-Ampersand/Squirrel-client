import React from 'react';

interface Props {
  text: string;
}

const FilterButton = ({ text }: Props) => {
  return (
    <button className="rounded-sm border-1 border-solid border-neutral-n30 px-4 py-2 text-body3 text-neutral-n20 transition-all duration-300 ease-in-out hover:border-primary-p10 hover:bg-primary-p10 hover:text-background-card">
      {text}
    </button>
  );
};

export default FilterButton;
