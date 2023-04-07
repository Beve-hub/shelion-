import React from 'react'
import Image from '../images/pexels-element-digital-1370295 2.png'

const About = () => {
  return (
    <div className='w-full py-8 px-4 bg-gray-300'>
        <h2 className='pt-16'>ABOUT LIBARY</h2>
      <div className='max-w-[1200px] mx-auto  grid md:grid-cols-2 items-center py-10 text-left'>
         <img src= {Image} alt='About_image' className='w-[400px] rounded-lg mx-auto my-24'/>
         <div>
           <p className='text-2xl'>Our extensive collection of our books really contains wide range of kownledge for everyone for different categories in such a way that you get mpotivated, improve technical skills, have funans so much more.</p> 
         </div>
      </div>
    </div>
  )
}

export default About
