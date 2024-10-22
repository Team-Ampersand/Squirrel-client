import React from 'react';
import { Squirrel } from '@/assets/svg';

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Squirrel />
      <p className="text-h1 text-primary-p10">SQUIRREL</p>
    </div>
  );
};

export default Logo;
