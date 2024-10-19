import React from 'react';

const CircleXmark = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="8"
        stroke="#656B80"
        strokeWidth="2"
      />
      <path
        d="M9.87871 9.87868L14.1213 14.1213M9.87871 14.1213L14.1213 9.87868"
        stroke="#656B80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleXmark;
