// import React from 'react'
import Header from '../Common/Header'
import { IoIosSend } from "react-icons/io";



const Contact = () => {
  return (
    <div className='flex flex-col m-4 sm:m-8 animate-fadeInScale '>
      <Header title={"Contact"} /> 

      <p className=' mt-8 text-fs-10 text-white-2 font-fw-600'>Contact Form</p>

      <div className='mt-10 flex flex-col gap-8'>

        <div className='flex flex-col sm:flex-row gap-5'>
          <input 
            placeholder='Full name'
            className='sm:w-[50%] w-full  text-light-gray opacity-70 bg-transparent border border-jet rounded-[12px] p-4'

          />
          <input 
            placeholder='Email Address'
            className='sm:w-[50%] w-full bg-transparent opacity-70 border border-jet rounded-[12px] p-4'

          />
        </div>

        <div>
          <textarea 
            placeholder='Your Message'
            className=' bg-transparent opacity-70 border border-jet rounded-[12px] p-4 w-full '
            rows={10}

          />

        </div>

        <div className=' flex justify-center sm:justify-end'>
        <div className=' flex flex-row justify-end items-center gap-2 max-w-fit px-4 py-2 text-vegas-gold font-fw-500 text-fs-2 shadow-shadow-1 bg-border-gradient-onyx rounded-[12px] flex-none w-auto '>
          <IoIosSend className=' w-[30px] h-[30px]' />
          <button>
            Send Message
          </button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact