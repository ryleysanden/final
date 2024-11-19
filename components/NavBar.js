import React from 'react';
import Link from 'next/link';


export default function Navbar({ currentPage, setCurrentPage }) {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" className={currentPage === 'About' ? 'active' : ''}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/available-pieces" className={currentPage === 'Available Pieces' ? 'active' : ''}>
                        Available Pieces
                    </Link>
                </li>
                <li>
                    <Link href="/past-works" className={currentPage === 'Past Works' ? 'active' : ''}>
                        Past Works
                    </Link>
                </li>
                <li>
                    <Link href="/commissions" className={currentPage === 'Commissions' ? 'active' : ''}>
                        Commissions
                    </Link>
                </li>
            </ul>
        </nav>
    );
}