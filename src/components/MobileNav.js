// web/src/components/MobileNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css'; // Optional: Create this file for nav-specific styles

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      {/* Using react-router-dom's Link for client-side routing */}
      <Link to="/">Home</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/page4">Page 4</Link>
    </nav>
  );
};

export default MobileNav;
