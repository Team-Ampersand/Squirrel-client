import React from 'react';
import { Lock, Person } from '@/assets/icons';
import TextField from '@/components/common/TextField';

const InputWrapper = () => {
  return (
    <div className="flex flex-col gap-2">
      <TextField leftIcon={<Person />} placeholder="이메일" type="email" />
      <TextField leftIcon={<Lock />} placeholder="비밀번호" type="password" />
    </div>
  );
};

export default InputWrapper;
