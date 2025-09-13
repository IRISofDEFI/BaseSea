import React, { useState } from 'react';
import { Search, Wallet, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const NavItem = ({ children, active = false, to }) => (
  <Link
    to={to}
    className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none ${
      active
        ? 'text-white'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    {children}
    {active && <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-blue-500 rounded-full mt-2" />}
  </Link>
);

export default function Header() {
  // Get current page from URL to determine active nav
  const currentPage = window.location.pathname.split('/').pop() || 'NFTMarketplace';
  
  const navLinks = [
    { name: 'Drops', page: 'Drops' },
    { name: 'Stats', page: 'Stats' },
    { name: 'Mint', page: 'NFTMarketplace' },
    { name: 'Create', page: 'Create' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#040911]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Nav */}
          <div className="flex items-center space-x-8">
            <Link to={createPageUrl('NFTMarketplace')} className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
              </svg>
              <span className="text-xl font-bold">BaseSea</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map(link => (
                <NavItem
                  key={link.name}
                  active={currentPage === link.page}
                  to={createPageUrl(link.page)}
                >
                  {link.name}
                </NavItem>
              ))}
            </nav>
          </div>

          {/* Right: Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-xs hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#111827] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Wallet className="h-6 w-6 text-gray-400" />
            </button>
            <button className="h-9 w-9 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <User className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}