"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface MainNavProps {
  open: boolean
}

const MainNav: React.FC<MainNavProps> = ({
  open
}) => {
  const pathname = usePathname();

  return (
    <nav
      id="main-nav"
      className="hidden sm:flex sm:static space-x-8 absolute top-14 right-2 gap-3.5"
      aria-expanded={open}
    >
      <Link
        className={cn(
          "transition-all hover:font-medium",
          pathname === "/services" ? "font-medium" : "font-light"
        )}
        href="/services"
      >
        Services
      </Link>
      <Link
        className={cn(
          "font-medium transition-all hover:font-medium",
          pathname === "/about" ? "font-medium" : "font-light"
        )}
        href="/about"
      >
        About
      </Link>
      <Link
        className={cn(
          "font-medium transition-all hover:font-medium",
          pathname === "/contact" ? "font-medium" : "font-light"
        )}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default MainNav;
