import React, { useState } from 'react';
import logo from '../assets/logo.png';
import profileImage from "../assets/profile.png";
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const isActive = (path) => location.pathname === path ? 'text-[#636AE8]' : 'text-[#A7ADB7]';

    return (
        <nav className="bg-[#171A1F] fixed z-50 w-full top-0">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 lg:mr-2 lg:pr-12 lg:ml-4 lg:w-full">
                <div className='flex items-center'>
                    <img src={logo} alt="DecentInvest Logo" className="h-16 w-auto" />
                    <h1 className='font-archivo text-[25px] leading-[42px] font-bold text-[#FFFFFF]'>
                        Threaded Tales
                    </h1>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                    aria-label="Toggle navigation menu"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`md:hidden w-full ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
                    id="navbar-default"
                >
                    <ul className="font-semibold flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('home')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#home')} cursor-pointer whitespace-nowrap font-bold relative`}>
                                Home
                                <div className='absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#636AE8] rounded-[2px]'></div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('themes')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#themes')} cursor-pointer whitespace-nowrap`}>
                                Themes
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('trending')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#trending')} cursor-pointer whitespace-nowrap`}>
                                Trending
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('trending')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#about')} cursor-pointer whitespace-nowrap`}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('contact')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#contact')} cursor-pointer whitespace-nowrap`}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full md:flex md:items-center md:justify-between 2xl:absolute 2xl:left-20 2xl:ml-56 xl:absolute xl:left-20 xl:ml-56 lg:absolute lg:left-20 lg:ml-56">
                    <ul className="font-semibold text-lg flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('home')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#home')} cursor-pointer whitespace-nowrap font-bold relative`}>
                                Home
                                <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#636AE8] rounded-[2px]"></div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('themes')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#themes')} cursor-pointer whitespace-nowrap`}>
                                Themes
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('trending')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#trending')} cursor-pointer whitespace-nowrap`}>
                                Trending
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('trending')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#about')} cursor-pointer whitespace-nowrap`}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" onClick={() => scrollToSection('contact')} className={`px-[15px] py-[12px] flex items-center justify-center ${isActive('/home#contact')} cursor-pointer whitespace-nowrap`}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center md:flex 2xl:absolute 2xl:right-80 xl:absolute xl:right-80 lg:absolute lg:right-80" id="loginBtn">
                        <Link to="/profile">
                            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                                <img src={profileImage} alt="User Profile Picture" className="w-full h-full object-cover" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
