
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-7 py-3 bg-black">
            <div className="flex justify-between items-center">
                <a className="font-bold text-white" href='#'>AK_Creations</a>
                <nav className="hidden md:block">
                    <ul className="flex text-white">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#project'>Project</a></li>
                        <li><a href='#resume'>Resume</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-5" /></button>
            </div>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#project'>Project</a></li>
                        <li><a href='#resume'>Resume</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};
