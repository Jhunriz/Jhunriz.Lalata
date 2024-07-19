import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='p-5 bg-white w-full fixed z-50 border-b-4 md:px-24'>
        <div className='flex justify-between items-center'>
          <div className='text-dark'><a href="#"><strong>JLALATA</strong></a></div>
          <div className='hidden md:flex items-start gap-5'>
            <a href="#" className='text-dark'>Home</a>
            <a href="#" className='text-dark'>Portfolio</a>
            <a href="#" className='text-dark'>CV</a>
            <button className='text-dark'>DOWNLOAD</button>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className='md:hidden'>
            <ul className='flex flex-col items-start gap-5 mt-4'>
              
              <li><a href="#" className='text-dark'>Home</a></li>
              <li><a href="#" className='text-dark'>Portfolio</a></li>
              <li><a href="#" className='text-dark'>CV</a></li>
              <li><button className='text-dark'>DOWNLOAD</button></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
