import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component that includes Navbar and Footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {function} props.onThemeToggle - Theme toggle handler
 * @param {boolean} props.isDarkMode - Current theme state
 * @returns {JSX.Element} - Layout component
 */
const Layout = ({ children, onThemeToggle, isDarkMode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <Navbar onThemeToggle={onThemeToggle} isDarkMode={isDarkMode} />
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Layout;