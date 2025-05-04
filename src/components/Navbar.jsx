import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, User, Settings, LogOut, Bell } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    // Close dropdowns on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsDropdownOpen(false);
        setIsProfileDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        e?.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
        setIsProfileDropdownOpen(false);
    };

    const toggleProfileDropdown = (e) => {
        e?.stopPropagation();
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white shadow-lg border-b-3 border-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold">
                            D
                        </div>
                        <span className="ml-2 text-xl font-bold">Devolio</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="hover:text-yellow-300">Home</a>
                        <a href="#" className="hover:text-yellow-300">About</a>

                        {/* Projects Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button onClick={toggleDropdown} className="flex items-center hover:text-yellow-300">
                                Projects <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Development</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Mobile Apps</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">UI/UX Design</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Consulting</a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="hover:text-yellow-300">Contact</a>

                        {/* Notification */}
                        <div className="relative cursor-pointer hover:text-yellow-300">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-2 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                3
                            </span>
                        </div>

                        {/* Profile */}
                        <div className="relative" ref={profileDropdownRef}>
                            <button onClick={toggleProfileDropdown}>
                                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                    <User size={18} />
                                </div>
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                        <User size={16} className="mr-2" /> Profile
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                        <Settings size={16} className="mr-2" /> Settings
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-500">
                                        <LogOut size={16} className="mr-2" /> Sign out
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
                    <a href="#" className="block py-2 hover:text-yellow-300">Home</a>
                    <a href="#" className="block py-2 hover:text-yellow-300">About</a>

                    <div>
                        <button onClick={toggleDropdown} className="flex justify-between items-center w-full py-2 hover:text-yellow-300">
                            Projects <ChevronDown className="w-4 h-4" />
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-4">
                                <a href="#" className="block py-2 hover:text-yellow-300">Web Development</a>
                                <a href="#" className="block py-2 hover:text-yellow-300">Mobile Apps</a>
                                <a href="#" className="block py-2 hover:text-yellow-300">UI/UX Design</a>
                                <a href="#" className="block py-2 hover:text-yellow-300">Consulting</a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="block py-2 hover:text-yellow-300">Contact</a>

                    <div className="border-t border-white pt-3">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <User size={18} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold">User Name</div>
                                <div className="text-xs text-white/80">user@example.com</div>
                            </div>
                            <div className="ml-auto relative">
                                <Bell size={18} />
                                <span className="absolute -top-1 -right-2 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    3
                                </span>
                            </div>
                        </div>

                        <div className="mt-2 space-y-1">
                            <a href="#" className="flex items-center py-2 hover:text-yellow-300"><User size={16} className="mr-2" /> Profile</a>
                            <a href="#" className="flex items-center py-2 hover:text-yellow-300"><Settings size={16} className="mr-2" /> Settings</a>
                            <a href="#" className="flex items-center py-2 text-red-500"><LogOut size={16} className="mr-2" /> Sign out</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
