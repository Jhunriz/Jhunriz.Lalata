import Jhunriz from '../assets/LALATA_JHUNRIZ.png';
import react from '../assets/Hijhunriz.svg';

const Introduction = () => {
  return (
    <div className='px-4 mt-10'>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:space-x-4'>
        <div className='text-left md:text-left'>
          <p className="text-black text-2xl pt-24 text-start lg:p-0 dark:text-white">Hello, I AM JHUNRIZ</p>
          <p className="text-3xl md:text-4xl lg:text-9xl bg-gradient-to-r lg:pb-7 from-blue-500 via-red-500 to-black dark:to-white bg-clip-text text-transparent"><strong>Full Stack Developer.</strong></p>
          <div>
            <p className='text-lg text-black dark:text-white'>Hello! I'm Jhunriz Lalata, a passionate and dedicated Full Stack Web Developer with a knack for creating stunning, user-friendly websites and applications. With a background in 1 year, I blend creativity and technical skills to bring innovative ideas to life.</p>
          </div>
        </div>
        <div className="relative justify-center items-center bg-black dark:bg-slate-900 mb-5 shadow-lg h-auto w-full max-w-md rounded mt-4 md:mt-0">
          <div className='flex justify-center items-center'>
            <img src={Jhunriz} alt="Jhunriz" className="object-contain w-60 h-auto lg:h-auto lg:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
