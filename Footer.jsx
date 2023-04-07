import React from 'react'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full py-4 text-white bg-[--primary-color] mt-16'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 justify-center'>
      <div className='lg:col-span-2 my-4 grid items-center justify-center'>
      <p className=' md:text-2xl sm:text-2xl text-2xl font-bold py-1 text-left border-b-2 border-w-[10px] '>FOLLOW US</p>
        <div className='flex gap-3 py-4'>
          <AiFillLinkedin size={30}/>
          <AiFillTwitterCircle size={30}/>
          <AiFillInstagram size={30}/>
          <BsMedium size={30}/>
        </div>
      </div>
      <div className='my-4'>
      <p className='md:text-2xl sm:text-xl text-2xl font-bold py-1 text-left border-b-2 border-w-[10px] '>Newsletter</p>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input className='p-3 flex w-full bg-[transparent] border-2  text-black'  type='email' placeholder='Enter Email'/>
              <button className='bg-[#ffff] text-[blue]  font-bold w-[200px] ml-4 my-6 px-6 py-3'>Subscribe</button>
          </div>
          
      </div>
      
    </div>
  </div>
  )
}

export default Footer
