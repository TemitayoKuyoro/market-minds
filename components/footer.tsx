import React from "react";
import Link from "next/link";

import Container from "@/components/ui/container";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex items-center space-x-16 py-6">
          <Link href="/">
            <p className="font-medium text-xl uppercase tracking-tight leading-none md:tracking-wide">
              Market Minds
            </p>
          </Link>
          <div>
            <nav className="columns-2 gap-10">
              <ul className="leading-7">
                <li className="text-muted-foreground hover:text-black">
                  <Link href="#">Products</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="#">Resources</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="">Careers</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="#">Community</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="">Services</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="">About</Link>
                </li>
                <li className="font-light hover:font-medium">
                  <Link href="">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="py-2">
          <p className="text-xs text-black text-center">
            &copy; copyright 2023; All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
