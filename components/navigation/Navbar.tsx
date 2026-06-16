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
          {/* Wrap everything in DropdownMenuGroup */}
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            {NAV_ITEMS.map((item) => (
              <DropdownMenuItem
                key={item.href}
                className="p-0 "
                onSelect={handleNavClick}
              >
                <div className="w-full py-3 px-1 rounded-md ">
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    onClick={handleNavClick}
                  />
                </div>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="p-2 focus:bg-transparent"
              onSelect={handleNavClick}
            >
              <Button className="w-full bg-[#021C2C] hover:bg-[#021C2C]/90 text-white">
                Get Started
              </Button>
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
