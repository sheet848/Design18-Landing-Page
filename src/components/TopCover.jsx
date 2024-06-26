import React from 'react';

import art1 from '../assets/Illustration_1.svg';

import visa from '../assets/m_visa.svg';
import mastercard from '../assets/m_mastercard.svg';
import paypal from '../assets/m_paypall.svg';

const TopCover = () => {
  return (
    <>
    <div className='hero-section px-4 md:flex md:flex-row lg:pt-[40px] lg:pb-[60] w-full mx-auto max-w-[1024px]'>
    <div className='left-content flex-[100%] md:flex-[78%]'>
    <div className='hero-intro'>
        <h1 className='text-5xl tracking-normal md:text-[40px] lg:text-[66px]'>Always Track & Analyze Your Business Statistics To Succeed.</h1>
        <p className='text-lg py-5 lg:pr-16'>A better way to manage your sales, team, clients & marketing <br className='md:hidden'/> -- on a single platform. Powerful, affordable & easy.</p>
    </div>
    <div className='form'>
        <form action="">
            <label for="email">
            <input type="email" id="email" placeholder='Enter your email' className='text-lg bg-white text-black py-3 px-4 w-[55%]'/>
            </label>
            <button type='submit' className='text-lg bg-black text-white py-3 px-5'>Get Started</button>
        </form>
    </div>
    <div className='pay-img flex flex-row gap-7 py-12'>
        <img src={visa}/>
        <img src={mastercard}/>
        <img src={paypal}/>
    </div>
    </div>
    <div className='right-content hidden md:block'>
        <img src={art1} />
    </div>
    </div>
    </>
  )
}

export default TopCover