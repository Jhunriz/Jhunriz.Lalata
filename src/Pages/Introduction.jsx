import Jhunriz from '../assets/LALATA_JHUNRIZ.png';

const Introduction = () => {
  return (
    <div className='pt-24 px-4'>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:space-x-4'>
        <div className='text-center md:text-left'>
          <p className="text-black text-2xl">Hello, I am JHUNRIZ</p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-blue-300"><strong>Full Stack Developer.</strong></p>
        </div>
        <div className="bg-blue-300 h-auto w-full max-w-md rounded mt-4 md:mt-0">
          <img src={Jhunriz} alt="Jhunriz" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
