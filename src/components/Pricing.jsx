import React from 'react';
import art4 from '../assets/Illustrations_4.svg';
import { priceOptions } from '../constant';

const Pricing = () => {
  return (
    <>
    <div className="about-us px-4 py-14 md:grid md:grid-cols-2">
        <div className="section-1 md:order-2">
            <div className="about-brick border-2 border-black w-[max-content] px-4 py-2 uppercase font-bold text-sm">Pricing</div>
            <h2 className='text-4xl pt-7 lg:text-6xl'>Select a membership level the right price for you.</h2>
            <p className='pt-5 pb-7'>Price listed in USD. Taxes may apply. By using program you agree to our terms and policies.</p>
        </div>
        <div className="section-2 md:order-1">
            <img src={art4} alt="girl-hugging-the-globe" />
        </div>
        <div className="pricing-blocks md:order-3 col-span-2 lg:flex lg:gap-x-3">
    { priceOptions.map((item, index) => (
        <div key={index} className='price-block border-2 border-black my-5 px-4 py-12 h-[640px] relative lg:w-full'>
        <p className='text-xl font-extrabold'><sup>$</sup><span className='text-7xl'>{item.price}</span><span className='text-xl'>per month</span></p>
        <p className='py-3 text-xl pr-20'>{item.offer}</p>
        <ul className='px-6 flex flex-col gap-7 pt-10'>
        { item.features.map((bullet, index) => (
            <li key={index} className='list-[square] text-lg'><span>{bullet}</span></li>
        ))}
        </ul>
        <button className='w-[90%] md:w-[96%] bg-black text-white absolute py-3 text-xl bottom-10 lg:w-[90%]'>Join</button>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default Pricing