'use client';

import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from '@/components/main-nav';

const Navbar = () => {
    return ( 
            <Container>
                <div className="grid grid-cols-2 py-2 border-b">
                    <Link href="/">
                        <p className="font-extrabold text-2xl uppercase">Market Minds</p>
                    </Link>
                    <MainNav />
                </div>
            </Container>
     );
}
 
export default Navbar;