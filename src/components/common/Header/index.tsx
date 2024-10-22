'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '../Logo';
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
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-6 rounded-lg px-4 py-3 ${
                  isActive
                    ? 'bg-primary-p20 text-primary-p10'
                    : 'text-natural-n30 bg-background-card'
                }`}
              >
                <item.icon color={isActive ? '#6F7AEC' : '#BBBBCC'} />
                <p
                  className="text-h5"
                  style={{ color: isActive ? '#6F7AEC' : '#BBBBCC' }}
                >
                  {item.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
