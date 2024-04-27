

export default function Navbar() {
  return (
    <div>
      <nav className='p-5 bg-black w-full'>
        <ul className='flex flex-grow justify-between items-center'>
          <li className='text-white'>logo</li>
          <div className='flex flex-grow justify-end items-center gap-5'>
          <li className='text-white'>Home</li>
          <li className='text-white'>Portfolio</li>
          <li className='text-white'>CV</li>
          <li><button className='bg-white text-black p-2 rounded shadow-lg shadow-black'>DOWNLOAD</button></li>
          </div>
        </ul>
      </nav>
    </div>
  )
}
