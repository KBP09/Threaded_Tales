import React, { useState } from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
    // State to manage dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#171A1F]  fixed z-50 w-full top-0">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 lg:mr-2 lg:pr-12 lg:ml-4 lg:w-full">
                <div className='flex items-center gap-1'>
                    <img
                        src={logo} 
                        alt="Placeholder"
                        className="w-16 h-16 object-cover"
                    />
                    <h1 className='font-archivo text-[28px] leading-[42px] font-bold text-[#FFFFFF]'>
                        Threaded Tales
                    </h1>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`md:hidden w-full ${isOpen ? 'block' : 'hidden'} transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    id="navbar-default"
                >
                    <ul className="font-semibold flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="#" className='px-[15px] py-[12px] flex items-center justify-center text-[#636AE8] cursor-pointer whitespace-nowrap font-bold relative'>
                                Home
                                <div className='absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#636AE8] rounded-[2px]'></div>
                            </a>
                        </li>
                        <li>
                            <a href="#register" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7]  cursor-pointer whitespace-nowrap'>
                                Themes
                            </a>
                        </li>
                        <li>
                            <a href="#startups" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] cursor-pointer whitespace-nowrap'>
                                Trending
                            </a>

                        </li>
                        <li>
                            <a href="#review" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7]  cursor-pointer whitespace-nowrap'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#news" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] cursor-pointer whitespace-nowrap'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full md:flex md:items-center md:justify-between 2xl:absolute 2xl:left-20 2xl:ml-56 xl:absolute xl:left-20 xl:ml-56 lg:absolute lg:left-20 lg:ml-56">
                    <ul className="font-semibold text-lg flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="px-[15px] py-[12px] flex items-center justify-center text-[#636AE8] cursor-pointer whitespace-nowrap font-bold relative">
                                Home
                                <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#636AE8] rounded-[2px]"></div>
                            </a>
                        </li>
                        <li>

                            <a href="#register" className="px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] cursor-pointer whitespace-nowrap">
                                Themes
                            </a>
                        </li>
                        <li>
                            <a href="#startups" className="px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] cursor-pointer whitespace-nowrap">
                                Trending
                            </a>

                        </li>
                        <li>
                            <a href="#review" className="px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] cursor-pointer whitespace-nowrap">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#news" className="px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] cursor-pointer whitespace-nowrap">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center md:flex 2xl:absolute 2xl:right-80 xl:absolute xl:right-80 lg:absolute lg:right-80" id="loginBtn">
                        <button className="w-[170px] h-[46px] px-[12px] flex items-center justify-center font-inter text-[16px] leading-[22px] font-normal text-[#FFFFFF] bg-[#636AE8] border-none rounded-[8px] opacity-100 hover:text-[#FFFFFF] hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40 lg:w-[130px] xl:w-[170px]" onClick={() => {
                            router.push("/sign-in")
                        }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;