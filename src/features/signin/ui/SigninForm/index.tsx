import React from 'react';
import { Lock, Person } from '@/shared/assets/icons';
import Button from '@/shared/ui/Button';
import TextField from '@/shared/ui/TextField';

const SigninForm = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col gap-2">
        <TextField leftIcon={<Person />} placeholder="이메일" type="email" />
        <TextField leftIcon={<Lock />} placeholder="비밀번호" type="password" />
      </div>
      <div className="mt-[73px] w-full">
        <Button text="확인" />
      </div>
    </div>
  );
};

export default SigninForm;
