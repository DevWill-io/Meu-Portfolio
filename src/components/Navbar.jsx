import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="logo" onClick={closeMenu}>
          &lt;Williams /&gt;
        </a>

        <div className="nav-right">
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
            <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>

          <ThemeToggle />

          <button
            className={`menu-btn ${open ? 'open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}