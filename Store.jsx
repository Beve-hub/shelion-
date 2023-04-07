import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef, useState } from "react";
import { Keyboard, Pagination, Navigation } from "swiper";

import {AiFillStar} from 'react-icons/ai'
import Image1 from '../images/book-1.png'
import Image2 from '../images/book-2.png'
import Image3 from '../images/book-3.png'
import Image4 from '../images/book-4.png'
import Image5 from '../images/book-5.png'
import Image6 from '../images/book-6.png'
import Image7 from '../images/book-7.png'
import Image8 from '../images/book-8.png'
import Image9 from '../images/book-9.png'
import Image10 from '../images/book-10.png'
import Image11 from '../images/book-11.png'
import Image12 from '../images/book-12.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Store = () => {
 

  return (
    <div className='w-full bg-white py-[10rem] px-4 '>
       
        <h2>DISCOVER YOUR NEXT BOOK</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4  justify-center gap-4 mt-24'>
          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image1} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>BLACK ROMANCE BOOK</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image2} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>The Darkening Age</p>
              <p className='text-sm py-2'>Catherine nixey</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image3} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>END OF WATCH</p>
              <p className='text-sm py-2'>Stephen kingt</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image4} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>Winston S.churchill</p>
              <p className='text-sm py-2'>Martin  Gilbert</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 justify-center gap-4 mt-24'>
          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image5} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>Winston S.churchill</p>
              <p className='text-sm py-2'>Martin  Gilbert</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image6} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>Winston S.churchill</p>
              <p className='text-sm py-2'>Martin  Gilbert</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image7} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>Winston S.churchill</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>
          
          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image8} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>BLACK ROMANCE BOOK</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 justify-center gap-4 mt-24'>
          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image9} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>BLACK ROMANCE BOOK</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image10} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>BLACK ROMANCE BOOK</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>

          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image11} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>BLACK ROMANCE BOOK</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>
          
          <div className='border w-fit p-2 grid items-center justify-center'>
          <img src={Image12} alt='store_img' className='w-[15rem]'/>
          <div className=' flex items-center justify-between'>
            <div className='text-left'>
              <p className='text-sm py-3 font-bold'>BLACK ROMANCE BOOK</p>
              <p className='text-sm py-2'>sheradsromance</p>
              <div className='flex text-[yellow]'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
            </div>
            <p className='border-2 rounded-full  text-[red] text-xs mt-16 p-1 border-[red]'>Buy Now</p>
          </div>
          </div>        
        </div>
      </SwiperSlide>
      
      ...
    </Swiper>

      </div>
  )
}

export default Store
