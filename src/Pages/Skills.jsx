

const Skills = () => {
  return (
    <div className='pt-24 px-4'>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:space-x-4'>
        <div className='text-center md:text-left'>
          <p className="text-black text-2xl">Hello, I am JHUNRIZ</p>
          <p className="text-3xl md:text-4xl lg:text-9xl bg-gradient-to-r from-blue-500 via-red-500 to-black bg-clip-text text-transparent"><strong>Full Stack Developer.</strong></p>
          <p className='text-xl pb-2'>About Me</p>
          <div className='flex flex-col lg:flex-row items-center gap-5'>
            <div className='w-full lg:w-80 h-24 rounded-lg bg-blue-500 shadow-lg border border-blue-500 shadow-blue-500 mb-5 lg:mb-0'>
              <div className='flex flex-col justify-start items-start h-full p-4'>
                <div className='flex justify-between items-center gap-10'>
                  <div>
                    <p className='text-white text-xl font-semibold'>Frontend</p>
                    <p className='text-white text-sm'>React/Typescript/Javascript</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-80 h-24 rounded-lg bg-red-500 shadow-lg border border-red-500 shadow-red-500 mb-5 lg:mb-0'>
              <div className='flex flex-col justify-start items-start h-full p-4'>
                <p className='text-white text-xl font-semibold'>Backend</p>
                <p className='text-white text-sm'>Laravel/php</p>
              </div>
            </div>
            <div className='w-full lg:w-80 h-24 rounded-lg bg-black shadow-lg border border-black shadow-black'>
              <div className='flex flex-col justify-start items-start h-full p-4'>
                <p className='text-white text-xl font-semibold'>Version Control</p>
                <p className='text-white text-sm'>Git/Github</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
