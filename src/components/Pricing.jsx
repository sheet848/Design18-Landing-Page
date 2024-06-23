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
        <div className="pricing-blocks">
    { priceOptions.map((item, index) => (
        <div key={index} className='price-block border-2 border-black my-5'>
        <p>{item.price}<span>per month</span></p>
        <p>{item.offer}</p>
        <ul>
        { /*{ priceOptions.features.map((bullet, index) => (
            <li key={index}><span>{bullet}</span></li>
        ))} */}
        </ul>
        <button>Join</button>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default Pricing