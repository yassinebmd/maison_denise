import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
      setActiveDropdown(null);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdown = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const navItems = [
    { title: 'ACCUEIL', to: '/' },
    {
      title: 'AGENDA',
      links: [
        { to: '/agenda-archive', text: 'ARCHIVE' },
        { to: '/actualites', text: 'ACTUALITES' }
      ]
    },
    {
      title: 'RESIDANCE',
      links: [
        { to: '/residence-archive', text: 'ARCHIVE' },
        { to: '/residence-actualite', text: 'ACTUALITES' }
      ]
    },
    {
      title: 'CREATION',
      links: [
        { to: '/Photos', text: 'GALLERY PHOTO' },
        { to: '/podcast', text: 'PODCAST/VIDEO' }
      ]
    },
    {
      title: 'DENISE MASSON',
      links: [
        { to: '/Biography', text: 'BIOGRAPHY' },
        { to: '/bibliotheque', text: 'BIBLIOTHEQUE' },
        { to: '/Archives', text: 'Archives' },
        { to: '/ResourcesPage', text: 'Lien-Resources' },
        { to: '/PhotoAlbum', text: 'PhotoAlbum' }
      ]
    }
  ];

  return (
    <nav className={`smooth-nav ${isMobile ? 'mobile-header' : 'desktop-header'}`}>
      {isMobile && (
  <button
    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
    onClick={toggleMenu}
    aria-label="Menu"
  >
    <img src="https://img.icons8.com/?size=100&id=dMz54mFbVirR&format=png&color=000000" alt="Menu" className="menu-icon" />
  </button>
)}

      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="img/zegel.png" alt="Logo" />
        </Link>




        {/* ✅ Menu container */}
        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeDropdown === index ? 'open' : ''}`}
              onClick={() => handleDropdown(index)}
              onMouseEnter={() => !isMobile && setActiveDropdown(index)}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
            >
              {item.links ? (
                <>
                  <button className="nav-link">
                    {item.title} <span className="dropdown-arrow">▼</span>
                  </button>
                  {(activeDropdown === index || !isMobile) && (
                    <div className="dropdown">
                      {item.links.map((link, linkIndex) => (
                        <Link
                          to={link.to}
                          key={linkIndex}
                          className="dropdown-link"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
