import React, { useState } from 'react';
import logo from '../assets/LogoBlack.svg';
import { navItems } from '../constant';

const NavBar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ToggleMenu= () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <>
        <header className='w-full mx-auto max-w-[1024px]'>
            <nav className="navbar flex items-center justify-between px-4 h-24">
            <div className="logo pr-8">
                <a href="/">
                    <img src={logo} alt='site-logo'/>
                </a>
            </div>

            {/* desktop navigation menu */}

            <div className="nav-items hidden left-0 w-full text-lg font-bold lg:flex lg:flex-row lg:justify-between lg:relative lg:top-0">
                <ul className='flex flex-col gap-6 items-center lg:flex-row'>
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:underline hover:underline-offset-8'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="head-buttons flex flex-col gap-6 items-center lg:flex-row">
                <a href="#" className='bg-white px-6 py-2'>Login</a>
                <a href="#" className='bg-black text-white px-6 py-2'>Sign Up</a>
                </div>
                </div> 

            {/* mobile navigation menu */}

            { mobileMenuOpen && (
                <div className="nav-items absolute top-[80px] left-0 w-full flex flex-col gap-6 items-center py-2 text-lg font-bold bg-[#F0F0F0]">
                <ul className='flex flex-col gap-6 items-center'>
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:underline hover:underline-offset-8'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="head-buttons flex flex-col gap-6 items-center">
                <a href="#" className='bg-white px-6 py-2'>Login</a>
                <a href="#" className='bg-black text-white px-6 py-2'>Sign Up</a>
                </div>
                </div>  
            )}
            
            <div className="menu-icon text-2xl lg:hidden">
                <button onClick={ToggleMenu}>
                    {mobileMenuOpen ? "X" : "☰"}
                </button>
            </div>
            </nav>
        </header>
    </>
  );
}

export default NavBar