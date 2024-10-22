'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '../Logo';
import NavItem from './atoms/NavItem';
import { Book, Music } from '@/assets/svg';

const navItems = [
  { href: '/', icon: Book, text: '예약' },
  { href: '/music', icon: Music, text: '음악' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen max-w-[258px] bg-background-card px-6 py-9">
      <Logo />
      <div className="mt-9 flex h-full w-full flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              text={item.text}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
