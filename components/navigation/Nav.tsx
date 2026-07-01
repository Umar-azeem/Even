"use client";

import React, { useState } from "react";
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [position, setPosition] = React.useState("bottom");

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
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* Mobile Menu - visible on small screens only */}
        <div className="sm:hidden w-full flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger >
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  {NAV_ITEMS.map((item) => (
                    <DropdownMenuRadioItem key={item.href} value={item.href}>
                      <div className="w-full py-3 px-1 rounded-md ">
                        <NavLink
                          href={item.href}
                          label={item.label}
                          onClick={handleNavClick}
                        />
                      </div>
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
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
