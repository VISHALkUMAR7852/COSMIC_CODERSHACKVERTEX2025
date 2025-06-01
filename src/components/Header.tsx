import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
              <FontAwesomeIcon icon={faHeartbeat} className="h-8 w-8 mr-2" />
              <span className="font-bold text-2xl">HealthAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/chatbot" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">AI Chatbot</Link>
            <NavLink to="/about" className={({ isActive }: { isActive: boolean }) => isActive ? 'text-green-500 font-semibold px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium'}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => isActive ? 'text-green-500 font-semibold px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium'}>Contact Us</NavLink>
            {isLoggedIn && (
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            )}
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/signup" className="bg-green-600 text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-500 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/chatbot" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>AI Chatbot</Link>
            {/* Add more links as needed */}
            {isLoggedIn && (
              <Link to="/dashboard" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Dashboard</Link>
            )}
            {isLoggedIn ? (
              <button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Logout</button>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Login</Link>
                <Link to="/signup" className="bg-green-600 text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
// Remove: import React from 'react';