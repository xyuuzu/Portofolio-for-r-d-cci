import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Skills & Tools', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
    ];

    // Fungsi pintar untuk handle klik
    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);

        // 1. Jika user TIDAK di halaman Home (misal di halaman detail), pindah dulu ke Home
        if (location.pathname !== '/') {
            navigate('/');
            // Tunggu sebentar sampai halaman Home loading, baru scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // 2. Jika user SUDAH di halaman Home, langsung scroll
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
            scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg" : "bg-transparent"
        }`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo */}
                <a
                    href="/"
                    onClick={(e) => handleNavClick(e, 'home')}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Rofiif Nabil <span className="text-blue-500">S.</span>
          </span>
                </a>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-white p-2">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu Items */}
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-lg bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className="block py-2 px-3 text-slate-300 hover:text-blue-400 md:p-0 transition-colors duration-200 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;