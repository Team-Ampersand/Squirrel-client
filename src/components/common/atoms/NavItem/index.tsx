import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  icon: React.ComponentType<{ color: string }>;
  text: string;
  isActive: boolean;
}

const NavItem = ({ href, icon: Icon, text, isActive }: Props) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-6 rounded-lg px-4 py-3 ${
          isActive
            ? 'bg-primary-p20 text-primary-p10'
            : 'text-natural-n30 bg-background-card'
        }`}
      >
        <Icon color={isActive ? '#6F7AEC' : '#BBBBCC'} />
        <p
          className="text-h6"
          style={{ color: isActive ? '#6F7AEC' : '#BBBBCC' }}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

export default NavItem;
