const Skills = () => {
  return (
    <div className='text-right md:text-right w-full'>
      <p className="text-3xl md:text-4xl lg:text-9xl bg-gradient-to-r from-blue-500 via-red-500 to-black bg-clip-text text-transparent">
        <strong>Developer Skills.</strong>
      </p>
      <div className='flex flex-col lg:flex-between items-end gap-5'>
        <div className='w-full lg:w-80 h-24 rounded-lg bg-blue-500 shadow-lg border border-blue-500 shadow-blue-500 mb-5 lg:mb-0'>
          <div className='flex flex-col h-full p-4'>
            <p className='text-white text-xl font-semibold'>Frontend</p>
            <p className='text-white text-sm'>React/Typescript/Javascript</p>
          </div>
        </div>
        <div className='w-full lg:w-80 h-24 rounded-lg bg-red-500 shadow-lg border border-red-500 shadow-red-500 mb-5 lg:mb-0'>
          <div className='flex flex-col h-full p-4'>
            <p className='text-white text-xl font-semibold'>Backend</p>
            <p className='text-white text-sm'>Laravel/php</p>
          </div>
        </div>
        <div className='w-full lg:w-80 h-24 rounded-lg bg-black shadow-lg border border-black shadow-black'>
          <div className='flex flex-col h-full p-4'>
            <p className='text-white text-xl font-semibold'>Version Control</p>
            <p className='text-white text-sm'>Git/Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
