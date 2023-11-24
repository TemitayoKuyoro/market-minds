"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <Container>
      <header className="px-3">
        <div className="flex justify-between py-2 border-b items-center">
          <Link href="/">
            <p className="font-medium text-xl uppercase tracking-tight leading-none md:tracking-wide">
              Market Minds
            </p>
          </Link>
          <>
            <button
              onClick={onClick}
              id="main-nav-toggle"
              className="sm:hidden"
              aria-controls="main-nav"
              aria-expanded={open}
            >
              <svg viewBox="0 0 100 100" width="20">
                <rect
                  className="line top"
                  width="80"
                  height="10"
                  x="10"
                  y="25"
                  rx="5"
                ></rect>
                <rect
                  className="line middle"
                  width="80"
                  height="10"
                  x="10"
                  y="45"
                  rx="5"
                ></rect>
                <rect
                  className="line bottom"
                  width="80"
                  height="10"
                  x="10"
                  y="65"
                  rx="5"
                ></rect>
              </svg>
            </button>
            <MainNav open={open} />
          </>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
