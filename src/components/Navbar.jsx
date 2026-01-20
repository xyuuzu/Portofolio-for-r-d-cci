import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Dev<span className="text-blue-500">R&D</span>
          </span>
                </a>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>

                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-lg bg-slate-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li><a href="#home" className="block py-2 px-3 text-white hover:text-blue-500">Home</a></li>
                        <li><a href="#about" className="block py-2 px-3 text-gray-400 hover:text-white">About</a></li>
                        <li><a href="#projects" className="block py-2 px-3 text-gray-400 hover:text-white">Research & Projects</a></li>
                        <li><a href="#contact" className="block py-2 px-3 text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;