import React from 'react';
import { aboutList } from '../constant';

import art2 from '../assets/Illustration_2.svg';

const AboutUs = () => {
  return (
    <>
    <div className="about-us px-4 py-14 md:grid md:grid-cols-2">
        <div className="section-1 md:order-2">
            <div id='about-us' className="about-brick border-2 border-black w-[max-content] px-4 py-2 uppercase font-bold text-sm">About Us</div>
            <h2 className='text-4xl pt-7 lg:text-6xl'>Faster, friendlier feedback loops make life easier.</h2>
            <p className='pt-5 pb-7'>Add a Viewer to your team so they can see everything you share, or invite people to individual documents. Its up to you. Stakeholders can check out designs in their web browser, test prototypes and leave feedback for free.</p>
        </div>
        <div className="section-2 md:order-1">
            <img src={art2} alt="girl-hugging-the-globe" />
        </div>
        <div className="section-3 pt-4 pb-8 md:order-3 md:w-full md:ml-[98%]">
            <ul className='list-[square] text-xl ml-6 flex flex-col gap-4'>
                {aboutList.map((bullet, index) => (
                    <li key={index}>{bullet.description}</li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}

export default AboutUs