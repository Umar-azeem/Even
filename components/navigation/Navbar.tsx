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

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="relative w-20 h-20 md:w-40 md:h-20 flex-shrink-0">
          <Image
            src="/img/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </nav>

        {/* Get Started Button - Desktop only */}

        {/* Mobile Menu - visible on small screens only */}
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu className="w-6 h-6 text-[#021C2C]" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onClick={handleNavClick}
                  />
                ))}
                <Button className="w-full">Get Started</Button>
              </nav>
              
            </SheetContent>
          </Sheet>

        </div>
                          <Button className="bg-transparent hover:bg-transparent border border-gray-400 rounded-sm">English <ChevronDown className="w-4 h-4 ml-2" /></Button>

      </div>
    </header>
  );
}