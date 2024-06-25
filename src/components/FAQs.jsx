import { useState } from 'react';
import art5 from '../assets/Illustration_5.svg';
import { faqAccordion } from '../constant';

const FAQs = () => {

  const [selected, setSelected ] = useState(-1);

  function handleSelected(getCurrentIndex) {
    setSelected(getCurrentIndex === selected ? -1 : getCurrentIndex);
  }

  return (
    <>
    <div className='how-works px-4 pb-14 md:grid md:grid-cols-2'>
        <div className="section-1 md:w-[30rem] lg:w-[45rem]">
            <div className="about-brick border-2 border-black w-[max-content] px-4 py-2 uppercase font-bold text-sm">FAQS</div>
            <h2 className='text-4xl pt-7 pr-3 lg:text-6xl'>Common Questions.</h2>
            <p className='pt-5 pb-7 lg:w-2/3'>The online form also provides links to a set of frequently asked questions, other information materials related to the financial disclosure programme.</p>
        </div>
        <div className="section-2 md:ml-12">
            <img src={art5} alt="man-and-giraffe" />
        </div>
        <div className="accordion-group lg:-mt-32">
        {faqAccordion.map((acc, index) => (
          <div className="accordion border-b-2 border-black">
            <div className="title text-xl font-extrabold py-3" onClick={() => handleSelected(index)}>{acc.title}
              {
                (selected === index) ? (
                  <span className='float-right rotate-45'>+</span>)
                   : ( <span className='float-right'>+</span> )
              }
            </div>
            {
              (selected === index) ? (
                <div className="answer pb-3">{acc.description}</div>
              ) : null
            }
            
          </div>    
        ))}
        </div>

      </div>
    </>
  )
}

export default FAQs