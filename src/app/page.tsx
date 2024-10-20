'use client';

import { toast } from 'react-toastify';
import { Lock, Person } from '@/assets/icons';
import TextField from '@/components/common/TextField';

export default function Home() {
  const handleClick = () => {
    console.log('Button clicked!');
    toast.success('Text');
  };
  return (
    <div>
      <button onClick={handleClick} className="bg-neutral-n30 px-4 py-3">
        하이
      </button>
      <TextField type="email" placeholder="이메일" leftIcon={<Person />} />
      <TextField type="password" placeholder="비밀번호" leftIcon={<Lock />} />
    </div>
  );
}
