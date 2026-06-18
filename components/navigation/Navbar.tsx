"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-30 h-24 md:w-40 md:h-20 flex-shrink-0">
          <Image
            src="/img/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 lg:gap-8 text-lg">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* Mobile Menu - visible on small screens only */}
       <div className="sm:hidden w-full flex justify-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Open menu"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-[#021C2C]" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="bottom"
          align="center"
          className="w-[300px]  md:hidden mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-2"
        >
          <DropdownMenuGroup>
  <DropdownMenuSeparator />

  {NAV_ITEMS.map((item) => (
    <DropdownMenuItem
      key={item.href}
      className="p-0 focus:bg-transparent hover:bg-[#04205D] hover:text-white transition-colors duration-200 rounded-md"
      onSelect={handleNavClick}
    >
      <Link
        href={item.href}
        className={`
          block w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200
          ${pathname === item.href 
            ? 'text-[#04205D] bg-gray-100' 
            : 'text-gray-700 hover:text-white hover:bg-[#04205D]'
          }
        `}
        onClick={handleNavClick}
      >
        {item.label}
      </Link>
    </DropdownMenuItem>
  ))}

  <DropdownMenuSeparator />

  <DropdownMenuItem
    className="p-0 focus:bg-transparent hover:bg-transparent rounded-md"
    onSelect={handleNavClick}
  >
    <Link
      href="/contact"
      className="block w-full"
      onClick={handleNavClick}
    >
      <Button className="w-full bg-[#04205D] hover:bg-[#04205D]/90 text-white font-semibold rounded-md">
        Get Started
      </Button>
    </Link>
  </DropdownMenuItem>
</DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
        <Button className="bg-transparent hover:bg-transparent border border-gray-400 rounded-sm">
          English <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </header>
  );
}
