import React from 'react'
import TEST1 from '../images/unsplash_iFgRcqHznqg.png'
import TEST2 from '../images/unsplash_IF9TK5Uy-KI.png'
import TEST3 from  '../images/unsplash_pg_WCHWSdT8.png'
import {RiStarSFill} from 'react-icons/ri'
import {BsQuote} from 'react-icons/bs'



const Testimonal = () => {
  return (
    <div className='w-full '>
        <h2 className='p-24'>TESTIMONIALS</h2>
        <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl border-b-4 border-blue-600 flex flex-col  items-center p-4 my-4 rounded-lg  hover:scale-105'>
            <BsQuote size={30} className='text-[blue] flex '/>
            <div className='flex justify-center text-2xl text-[yellow] py-4'>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
            </div>
            <div  className='text-left p-3 md:xl'>
              <pe>Lorem ipsum dolor sit ametconsectetur..</pe>
              <p>Doloradipiscingmiviverraiddiamarcupelle</p>
              <p>Lorem ipsum dolor sitametconsectetur.Doloradipiscing</p>
              <p>is.miviverraiddiamarcupellentesquemauris</p>
            </div>
            <img src={TEST1} alt='testi_image' className='w-[80px] P-3 rounded-full flex justify-center' />
            <p className='font-bold text-xl '>Steve  Fred</p>
          </div>

          <div className='w-full shadow-xl flex flex-col border-b-4 border-blue-500 items-center p-4 my-4 rounded-lg  hover:scale-105'>
            <BsQuote size={30} className='text-[blue] flex '/>
            <div className='flex justify-center text-2xl text-[yellow] py-4'>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
            </div>
            <div  className='text-left p-3  md:xl'>
              <pe>Lorem ipsum dolor sit ametconsectetur..</pe>
              <p>Doloradipiscingmiviverraiddiamarcupelle</p>
              <p>Lorem ipsum dolor sitametconsectetur.Doloradipiscing</p>
              <p>is.miviverraiddiamarcupellentesquemauris</p>
            </div>
            <img src={TEST2} alt='testi_image' className='w-[80px] P-3 rounded-full flex justify-center' />
            <p className='font-bold text-xl '>Hanaha Long</p>
          </div>

          <div className='w-full shadow-xl flex flex-col  border-b-4 border-blue-500  items-center p-4 my-4 rounded-lg  hover:scale-105'>
            <BsQuote size={30} className='text-[blue] flex '/>
            <div className='flex justify-center text-2xl text-[yellow] py-4'>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
            </div>
            <div  className='text-left p-3 md:xl'>
              <pe>Lorem ipsum dolor sit ametconsectetur..</pe>
              <p>Doloradipiscingmiviverraiddiamarcupelle</p>
              <p>Lorem ipsum dolor sitametconsectetur.Doloradipiscing</p>
              <p>is.miviverraiddiamarcupellentesquemauris</p>
            </div>
            <img src={TEST3} alt='testi_image' className='w-[80px] rounded-full flex justify-center p-3' />
            <p className='font-bold text-xl '>Sarah Dutch</p>
          </div>
        </div>
    </div>
  )
}

export default Testimonal 
