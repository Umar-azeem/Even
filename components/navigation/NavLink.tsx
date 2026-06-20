'use client';

import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-[#04205D] md:hover:text-gray-900 transition-colors text-sm md:text-xl font-medium group"
    >
      {label}
      <span className="hidden md:flex absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}