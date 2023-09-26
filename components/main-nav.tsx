'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const MainNav = () => {
    const pathname = usePathname()
    return ( 
        <nav className='grid grid-cols-3 text-xl'>
            <Link className={cn("transition-all hover:font-medium",
            pathname === '/services' ? "font-medium" : "font-light")} href="/services">
                Services
            </Link>
            <Link className={cn("font-medium transition-all hover:font-medium",
            pathname === '/about' ? "font-medium" : "font-light")} href="/about">
                About
            </Link>
            <Link className={cn("font-medium transition-all hover:font-medium",
            pathname === '/contact' ? "font-medium" : "font-light")} href="/contact">
                Contact
            </Link>
        </nav>
     );
}
 
export default MainNav;