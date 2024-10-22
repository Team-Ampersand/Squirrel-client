import React from 'react';
import Button from '@/components/common/atoms/Button';

const ButtonWrapper = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button text="로그인" />
      <p className="text-body3 text-neutral-n20">
        해당 페이지는 어드민 전용 페이지 입니다.
      </p>
    </div>
  );
};

export default ButtonWrapper;
