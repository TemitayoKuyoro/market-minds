"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    if(open) {
      setOpen(false)
    } 
    if(!open){
      setOpen(true)
    }
  }

  return (
    <Container>
      <div className="flex justify-between py-2 border-b">
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
          >
            <Menu />
          </button>
          <MainNav open={open} />
        </>
      </div>
    </Container>
  );
};

export default Navbar;
