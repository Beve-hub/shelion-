import React from 'react'
import Image from '../images/Group 44.png'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import {BsMedium} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] '>
      <img src={Image } alt='hero_image' className='w-full object-cover h-[100vh]'/>
      <div className='flex justify-center'>
         <div className='absolute  items-center  top-[40%] w-full md:-[50%]  max-w-[800px] h-full flex flex-col  text-white p-4'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-5'>Develop your Imagination.</h1>
            <p className='max-w-[600px] p-4 text-xl'>Not sure of What to read next? Explore our Catalog of Public Domain Books With Our Editors.</p>
            <button className='px-8 py-3 text-xl rounded-lg'>Explore Now</button>
          </div>
      </div>
      <div className='absolute bottom-[8%] items-center text-white  left-12'>
        <div className='flex gap-3 '>
          <AiFillLinkedin size={30}/>
          <AiFillTwitterCircle size={30}/>
          <AiFillInstagram size={30}/>
          <BsMedium size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
