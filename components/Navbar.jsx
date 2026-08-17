import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>

            <Link to="/" className="navbar-logo" onClick={closeMenu}>

                <span className="logo-small">WCF</span>

                <span className="logo-main">
        WORLD<br />
        CHAMPIONSHIP
    </span>

                <span className="logo-year">
        2026
    </span>
                <span className="egypt-badge">

    <img
        src="/assets/egypt-flag.png"
        alt="Egyptian flag"
        className="egypt-flag"
    />

    <span className="egypt-name">
        EGYPT
    </span>

</span>

            </Link>


            {/* DESKTOP NAV */}

            <nav className="desktop-nav">

                <Link to="/" className="nav-link">
                    HOME
                </Link>

                <Link to="/championship" className="nav-link">
                    CHAMPIONSHIP
                </Link>

                <Link to="/qualifier" className="nav-link">
                    QUALIFIER
                </Link>

                <Link to="/clubs" className="nav-link">
                    CLUBS
                </Link>

                <Link to="/players" className="nav-link">
                    PLAYERS
                </Link>

                <Link to="/hotels" className="nav-link">
                    HOTELS
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact Us
                </Link>

            </nav>


            {/* MOBILE MENU BUTTON */}

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            {/* MOBILE MENU */}

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                <div className="mobile-menu-inner">

                    <div className="mobile-menu-top">
                        <span>2026</span>
                        <span>EGYPT</span>
                    </div>

                    <nav className="mobile-nav">

                        <Link to="/" onClick={closeMenu}>
                            <span>01</span>
                            HOME
                        </Link>

                        <Link to="/championship" onClick={closeMenu}>
                            <span>02</span>
                            CHAMPIONSHIP
                        </Link>

                        <Link to="/qualifier" onClick={closeMenu}>
                            <span>03</span>
                            QUALIFIER
                        </Link>

                        <Link to="/clubs" onClick={closeMenu}>
                            <span>04</span>
                            CLUBS
                        </Link>

                        <Link to="/players" onClick={closeMenu}>
                            <span>05</span>
                            PLAYERS
                        </Link>

                        <Link to="/hotels" onClick={closeMenu}>
                            <span>06</span>
                            HOTELS
                        </Link>

                    </nav>

                    <div className="mobile-menu-footer">
                        GOLF CROQUET WORLD CHAMPIONSHIP
                        <br />
                        NOVEMBER 21 — 29, 2026
                    </div>

                </div>

            </div>

        </header>
    );
}