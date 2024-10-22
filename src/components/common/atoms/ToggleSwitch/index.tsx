import { useState } from 'react';

const ToggleSwitch = () => {
  const toggleSwitch = () => {
    setIsActive((prevState) => !prevState);
  };

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      onClick={toggleSwitch}
      className={`relative flex h-[32px] w-[56px] cursor-pointer items-center rounded-[75px] transition-colors duration-300 ${
        isActive ? 'bg-primary-p10' : 'bg-neutral-n40'
      }`}
    >
      <div
        className={`absolute h-[24px] w-[24px] rounded-full bg-white transition-all duration-300 ${
          isActive ? 'left-[28px]' : 'left-[4px]'
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
