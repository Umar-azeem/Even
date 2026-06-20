// lib/constants.ts
export interface NavItem {
  label: string;
  href: string;
  subItems?: {
    label: string;
    href: string;
  }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "Evan", href: "/about" },
      { label: "Mission", href: "/mission" },
      { label: "Vision", href: "/vision" },
      { label: "Values", href: "/values" },
    ],
  },
  { label: "Loan", href: "/loan" },
  { label: "Contact", href: "/contact" },
] as const;
