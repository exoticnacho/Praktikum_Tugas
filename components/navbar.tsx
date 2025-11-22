"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-glass">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3 text-white" href="/">
                    Lumina<span className="text-primary">.</span>
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className={`nav-link px-3 ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" href="#services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" href="#portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item ms-lg-3">
                            <Link className="btn btn-primary-glow btn-sm" href="#contact">Let's Talk</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
