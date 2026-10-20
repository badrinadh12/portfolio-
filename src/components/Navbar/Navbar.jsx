import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="hud-navbar">
      <Link to="/" className="brand-emblem" aria-label="Badrinadh Portfolio Home">
        <div className="emblem-box">B</div>
        <span>BADRINADH</span>
      </Link>

      <nav aria-label="Main Navigation">
        <ul className="hud-nav-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={`hud-nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
