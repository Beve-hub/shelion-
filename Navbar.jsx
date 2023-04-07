
import { useState } from 'react'
import Logo from '../images/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
    
  return (
    <div className=' fixed h-24 w-full  overflow-hidden flex justify-between items-center mx-auto  z-10 text-text bg-[--primary-color]'>
      <img src={Logo} alt='/' className='pl-16'/>
      <ul className='hidden md:flex px-4 text-white pr-24 '>
        <li className=' text-xl'><a href='/'>Home</a></li>
        <li className=' text-xl'><a href='#Store'>Store</a></li>
        <li className=' text-xl'><a href='#About'>About</a></li>
        <li className=' text-xl'><a href='#Testimonial'>Testimonal</a></li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden pr-10 text-[white] '>
        {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      <div className={!nav ? 'lg:hidden fixed left-0 top-0 w-[60%] h-full bg-[white] text-blue border-b-black z-10 ease-in-out duration-500' : 'fixed left-[-400%]'}>
        <ul className='uppercase p-4 pt-24 text-[blue]'>
          <li className=' text-2xl'><a href='/'>Home</a></li>
          <li className=' text-2xl'><a href='#store'>Store</a></li>
          <li className=' text-2xl'><a href='#about'>About</a></li>
          <li className=' text-2xl'><a href='#testimonials'>Testimonals</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
