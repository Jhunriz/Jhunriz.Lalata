import anime from "animejs";
import { CircleChevronLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import tailwindcss from '../assets/tailwindcss.png';
import styledComponent from '../assets/styled-components.png';
import jquery from '../assets/jquery.png';
import Typescript from '../assets/Typescript.png';
import Bootstrap from '../assets/Bootstrap.png';
import mysql from '../assets/mysql.png';
import vite from '../assets/Vitejs.png';
import postman from '../assets/Postman.png';

const Skills = () => {
  const [openCard, setOpenCard] = useState(null);

  const cardRefs = {
    frontend: useRef(null),
    backend: useRef(null),
    versionControl: useRef(null)
  };

  const handleCardClick = (cardName) => {
    setOpenCard(openCard === cardName ? null : cardName);
  };

  useEffect(() => {
    Object.keys(cardRefs).forEach((cardName) => {
      const ref = cardRefs[cardName].current;
      if (openCard === cardName && ref) {
        anime({
          targets: ref,
          opacity: [0, 1],
          translateY: [-20, 0],
          endDelay: 1000,
          direction: 'alternate'
        });
      }
    });
  }, [openCard]);

  useEffect(() => {
    anime({
      targets: '.slider',
      translateX: [
        { value: '100%', duration: 0 },
        { value: '-100%', duration: 20000, easing: 'linear' }
      ],
      loop: true
    });
  }, []);

  return (
    <div className='text-right lg:my-40 lg:pt-0 px-4 lg:px-0'>
      <div className="pt-10 lg:pt-0">
        <p className="text-6xl md:text-9xl lg:text-4xl xl:text-5xl py-4 lg:py-6 bg-gradient-to-r from-blue-500 via-red-500 to-black dark:to-white bg-clip-text text-transparent">
          <strong>Developer Skills</strong>
        </p>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-wrap justify-center gap-4'>
        {['frontend', 'backend', 'versionControl'].map((cardName) => (
          <div key={cardName} className='w-full md:w-1/2 lg:w-80 h-24 rounded-lg mb-4 lg:mb-0'>
            {openCard === cardName && (
              <div ref={cardRefs[cardName]} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <p className='text-center'>
                  {cardName === 'frontend' ? 'I have 5 Years of Experience in Javascript' :
                    cardName === 'backend' ? 'I have 1 Year of Experience in Laravel' :
                      'I have 2 Years of Experience in Version Control'}
                </p>
              </div>
            )}
            <div
              className={`cursor-pointer ${cardName === 'frontend' ? 'bg-blue-500' : cardName === 'backend' ? 'bg-red-500' : 'bg-black'} w-full h-full rounded-lg shadow-lg border ${cardName === 'frontend' ? 'border-blue-500' : cardName === 'backend' ? 'border-red-500' : 'border-black dark:border-slate-700'} ${cardName === 'frontend' ? 'shadow-blue-500' : cardName === 'backend' ? 'shadow-red-500' : 'shadow-black dark:shadow-slate-800'}`}
              onClick={() => handleCardClick(cardName)}
            >
              <div className='flex flex-row items-center justify-between h-full p-4'>
                <button type="button"> {/* Ensure button type */}
                  <CircleChevronLeft className="text-white" />
                </button>
                <div className='text-white text-end'>
                  <p className='text-lg font-semibold'>{cardName.charAt(0).toUpperCase() + cardName.slice(1)}</p>
                  <p className='text-sm'>
                    {cardName === 'frontend' ? 'React/Typescript/Javascript' :
                      cardName === 'backend' ? 'Laravel/php' :
                        'Git/Github'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-6 border-slate-700 border-2" />
      <div className="overflow-hidden">
        <div className="slider flex gap-10 w-24 justify-center items-center">
          <img src={tailwindcss} alt="Tailwind CSS" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={styledComponent} alt="Styled Component" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={jquery} alt="jQuery" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={Typescript} alt="TypeScript" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={Bootstrap} alt="Bootstrap" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={mysql} alt="MySQL" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={vite} alt="Vite" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={postman} alt="Postman" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={tailwindcss} alt="Tailwind CSS" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={styledComponent} alt="Styled Component" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={jquery} alt="jQuery" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={Typescript} alt="TypeScript" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={Bootstrap} alt="Bootstrap" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={mysql} alt="MySQL" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={vite} alt="Vite" className="w-24" onError={(e) => { e.target.onerror = null; }} />
          <img src={postman} alt="Postman" className="w-24" onError={(e) => { e.target.onerror = null; }} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
