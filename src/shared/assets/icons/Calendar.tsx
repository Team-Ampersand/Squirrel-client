import React from 'react';

const Calendar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7.49997C3 5.84312 4.34315 4.49997 6 4.49997H18C19.6569 4.49997 21 5.84312 21 7.49997V18C21 19.6568 19.6569 21 18 21H6C4.34315 21 3 19.6568 3 18V7.49997Z"
        stroke="#656B80"
        strokeWidth="2"
      />
      <rect x="15" y="15" width="3" height="3" rx="1" fill="#656B80" />
      <path d="M3 9H21" stroke="#656B80" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C7.55228 2 8 2.48353 8 3.08V5H6V3.08C6 2.48353 6.44772 2 7 2Z"
        fill="#656B80"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2C17.5523 2 18 2.48353 18 3.08V5H16V3.08C16 2.48353 16.4477 2 17 2Z"
        fill="#656B80"
      />
    </svg>
  );
};

export default Calendar;
