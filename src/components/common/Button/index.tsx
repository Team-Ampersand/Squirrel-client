import React from 'react';

interface Props {
  text: string;
  disabled?: boolean;
}

const Button = ({ text, disabled = false }: Props) => {
  return (
    <button
      className="blur-[32px]:drop-shadow-[8px] w-full rounded-sm bg-primary-p10 p-4 text-h4 text-white active:shadow-[0px_12px_32px_0px_#6F7AEC14] disabled:bg-primary-p30"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
