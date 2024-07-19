import Jhunriz from '../assets/LALATA_JHUNRIZ.png';
import react from '../assets/Hijhunriz.svg';

const Introduction = () => {
  return (
    <div className='px-4'>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:space-x-4'>
        <div className='text-center md:text-left'>
          <p className="text-black text-2xl pt-24 lg:p-0">Hello, I AM JHUNRIZ</p>
          <p className="text-3xl md:text-4xl lg:text-9xl bg-gradient-to-r from-blue-500 via-red-500 to-black bg-clip-text text-transparent"><strong>Full Stack Developer.</strong></p>
          <p className='text-xl pb-2'>About Me - </p>
          <div className='flex flex-col lg:flex-row items-center gap-5'>
            <div className='w-full lg:w-full h-auto rounded-lg bg-blue-500 shadow-lg border border-blue-500 shadow-blue-500 mb-5 lg:mb-0'>
              <div className='flex flex-col justify-start items-start h-full p-4'>
                <div className='flex justify-between items-start w-full gap-10'>
                  <div className='flex flex-col'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
                      <div className=''>
                        <p className='text-white text-xl font-semibold'>Developer:</p>
                        <p className='text-white text-sm'>Work Experience 1 year</p>
                      </div>
                      <div className=''>
                        <p className='text-white text-xl font-semibold'>Education:</p>
                        <ul>
                          <li className='text-white text-sm'>Sto Nino Elementary School - Elementary Education</li>
                          <li className='text-white text-sm'>Benigno Aquino Jr Highschool - Secondary Education</li>
                          <li className='text-white text-sm'>St Vincent De Ferrer College - Senior Highschool</li>
                          <li className='text-white text-sm'>University of Caloocan City - College</li>
                        </ul>
                      </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 py-2'>
                      <div className=''>
                        <p className='text-white text-xl font-semibold'>Awards:</p>
                        <p className='text-white text-sm'>The millenial speaker 2019</p>
                        <p className='text-white text-sm'>PC Assembly/Disassembly Competition 3rd place 2023 University of Caloocan City</p>
                        <p className='text-white text-sm'>Appcon 2022 Finalist of Otis Japan</p>
                        <p className='text-white text-sm'>Appcon 2022 CKC NETWORK INC AWARD</p>
                      </div>
                    </div>
                  </div>
                  <div className='hidden lg:block'>
                    <img src={react} alt="reactjs" className='h-52' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-black shadow-lg h-auto w-full max-w-md rounded-full mt-4 md:mt-0">
          <img src={Jhunriz} alt="Jhunriz" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
