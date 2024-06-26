import React from 'react';
import art3 from '../assets/Illustration_3.svg';
import { works } from '../constant';

const HowItWorks = () => {
  return (
    <>
    <div className='how-works px-4 pb-14 md:grid md:grid-cols-2 w-full mx-auto max-w-[1024px]'>
        <div className="section-1 md:w-[30rem] lg:w-[45rem]">
            <div id='how-it-works' className="about-brick border-2 border-black w-[max-content] px-4 py-2 uppercase font-bold text-sm">How it works</div>
            <h2 className='text-4xl pt-7 pr-3 lg:text-6xl'>Building the best space for collaboration.</h2>
        </div>
        <div className="section-2 md:ml-12">
            <img src={art3} alt="ballet-mechanic-girl" />
        </div>
        <div className="section-3 order-2 md:w-[30rem] md:mt-[-55%] lg:w-[45rem]">
            {works.map((item, index) => (
                <div key={index} className="feature py-5 md:flex">
                    <div className='part1 w-[15rem]'>
                    <img src={item.icon} alt="bullet-icon" />
                    </div>
                    <div className="part2 md:ml-8">
                    <div className="title text-[27px] pb-3">{item.text}</div>
                    <div className='descript text-lg'>{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default HowItWorks