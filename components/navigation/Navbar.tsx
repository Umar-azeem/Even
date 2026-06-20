"use client";

import { useState } from "react";
import { ChevronDown, Menu, ChevronRight } from "lucide-react";
import { NAV_ITEMS, NavItem } from "@/lib/constants";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setOpen(false);
    setMobileAboutOpen(false);
  };

  // Check if any About sub-item is active
  const isAboutActive = () => {
    const aboutItem = NAV_ITEMS.find(item => item.label === "About");
    return aboutItem?.subItems?.some(subItem => pathname === subItem.href) || false;
  };

  // Handle mobile about toggle
  const toggleMobileAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileAboutOpen(!mobileAboutOpen);
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
        <nav className="hidden sm:flex gap-6 lg:gap-8 text-lg items-center">
          {NAV_ITEMS.map((item: NavItem) => {
            // Check if this is the About item with subItems
            if (item.subItems) {
              return (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`relative text-[#04205D] md:hover:text-gray-900 transition-colors text-sm md:text-xl font-medium group flex items-center gap-1 ${
                        isAboutActive() || pathname === item.href ? "text-[#04205D]" : ""
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                      <span className="hidden md:flex absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-2">
                    {item.subItems.map((subItem: { label: string; href: string }) => (
                      <DropdownMenuItem
                        key={subItem.href}
                        className="p-0 focus:bg-transparent hover:bg-[#04205D] hover:text-white transition-colors duration-200 rounded-md"
                      >
                        <Link
                          href={subItem.href}
                          className={`block w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            pathname === subItem.href
                              ? "text-[#04205D] bg-gray-100"
                              : "text-gray-700 hover:text-white hover:bg-[#04205D]"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            // Regular nav items
            return (
              <NavLink key={item.href} href={item.href} label={item.label} />
            );
          })}
        </nav>

        {/* Mobile Menu */}
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
              className="w-[300px] md:hidden mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-2"
            >
              <DropdownMenuGroup>
                <DropdownMenuSeparator />

                {NAV_ITEMS.map((item: NavItem) => {
                  // Check if this is the About item with subItems for mobile
                  if (item.subItems) {
                    return (
                      <div key={item.href} className="w-full">
                        <div
                          className="flex text-[#021C2C] hover:text-white items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer hover:bg-[#04205D] hover:text-white"
                          onClick={toggleMobileAbout}
                        >
                          <span className="">{item.label}</span>
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileAboutOpen ? 'rotate-90' : ''
                            }`} 
                          />
                        </div>
                        
                        {/* Mobile Sub-items */}
                        {mobileAboutOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                            {item.subItems.map((subItem: { label: string; href: string }) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                                  pathname === subItem.href
                                    ? "text-[#04205D] bg-gray-100"
                                    : "text-gray-700 hover:text-white hover:bg-[#04205D]"
                                }`}
                                onClick={handleNavClick}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  // Regular mobile items
                  return (
                    <DropdownMenuItem
                      key={item.href}
                      className="p-0 focus:bg-transparent hover:bg-[#04205D] hover:text-white transition-colors duration-200 rounded-md"
                      onSelect={handleNavClick}
                    >
                      <Link
                        href={item.href}
                        className={`block w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                          pathname === item.href
                            ? "text-[#04205D] bg-gray-100"
                            : "text-gray-700 hover:text-white hover:bg-[#04205D]"
                        }`}
                        onClick={handleNavClick}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}

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