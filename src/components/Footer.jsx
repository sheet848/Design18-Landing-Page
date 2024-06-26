import React from 'react';
import footerLogo from '../assets/LogoWhite.svg';
import { platformLinks, resourcesLinks } from '../constant';

const Footer = () => {
  return (
    <>
    <footer className='bg-black text-white'>
      <div className='w-full mx-auto max-w-[1024px] px-4 py-8 lg:flex lg:flex-row'>
        <div className='first-email-part'>
        <img src={ footerLogo } alt="footer-logo" />
        <p className='text-3xl py-5'>Want to receive some awesome stories?</p>
        <div className='form'>
        <form action="">
            <label for="email">
            <input type="email" id="email" placeholder='Enter your email' className='text-lg bg-white text-black py-3 px-4 w-[55%]'/>
            </label>
            <button type='submit' className='text-lg bg-gray-400 text-white py-3 px-5'>Subscribe</button>
        </form>
        </div>
        </div>

        <div className='all-links-galore md:flex md:flex-row md:gap-28'>
        <div className='about-links py-10 text-lg flex flex-col gap-6 items-center md:items-start'>
          {resourcesLinks.map((link, index) => (
            <div key={index}>
              <a href={link.href}>{link.text}</a>
            </div>
          ))}
        </div>

        <div className='otherlinks py-10 text-lg flex flex-col gap-6 items-center md:items-start'>
          { platformLinks.map((link, index) => (
            <div key={index}>
              <a href={link.href}>{link.text}</a>
            </div>
          ))}

          <p className='font-bold'>Email</p>
          <p>info@the18.design</p>
        </div>

        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer