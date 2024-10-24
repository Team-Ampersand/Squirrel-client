import React from 'react';
import SigninForm from '@/features/session/signin/ui/SigninForm';
import Logo from '@/shared/ui/Logo';

const SigninContainer = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background-bg">
      <div className="flex h-[438px] w-[444px] flex-col rounded-lg bg-background-card px-8 py-9">
        <div className="mb-8">
          <Logo />
        </div>
        <SigninForm />
        <p className="mt-4 text-center">
          해당 페이지는 어드민 전용 페이지 입니다.
        </p>
      </div>
    </div>
  );
};

export default SigninContainer;
