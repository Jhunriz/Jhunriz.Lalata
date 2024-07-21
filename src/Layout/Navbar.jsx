import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import DarkModeToggle from '../Components/DarkmodeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      anime({
        targets: menuRef.current,
        opacity: isOpen ? [0, 1] : [1, 0],
        translateY: isOpen ? [-20, 0] : [0, -20],
        easing: 'easeOutExpo',
        duration: 300,
      });
    }
  }, [isOpen]);

  return (
    <div className='animenav'>
      <nav className='p-5 bg-white dark:bg-black w-full fixed z-50 border-b-4 dark:border-gray-900 md:px-24'>
        <div className='flex justify-between items-center'>
          <div className='text-dark dark:text-white'>
            <a href="#"><strong>JLALATA</strong></a>
          </div>
          <div className='hidden md:flex items-start gap-5'>
            <a href="#" className='text-dark duration-demo dark:text-white'>Home</a>
            <a href="#" className='text-dark dark:text-white'>Portfolio</a>
            <a href="#" className='text-dark dark:text-white'>CV</a>
            <DarkModeToggle />
          </div>
          <div className='md:hidden dark:text-white'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} ref={menuRef}>
          <ul className='flex flex-col items-start gap-5 mt-4'>
            <li><a href="#" className='text-dark dark:text-white'>Home</a></li>
            <li><a href="#" className='text-dark dark:text-white'>Portfolio</a></li>
            <li><a href="#" className='text-dark dark:text-white'>CV</a></li>
            <li className='w-full'>
              <div className='flex justify-between w-full'>
                <p className='text-dark dark:text-white'>Dark Mode</p>
                <DarkModeToggle />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
