// import React from 'react'
import Header from '../Common/Header'
// import { IoBookOutline } from "react-icons/io5";
import SkillsIcon from '../assets/Data/SkillsIcon';

const Resume = () => {
  return (
    <div className='m-4 sm:m-8 flex flex-col animate-fadeInScale' >
        <Header title={"Skills"} />

        <div className='flex flex-row gap-3'>

          {/* <div>
            <IoBookOutline />
            <p>Experience</p>
          </div>  */}

          <div className='mt-12 flex flex-col gap-5'> 
            <p className='text-fs-10 text-white-2 font-fw-600'>My Skills</p>
            <div className='flex flex-wrap gap-5  relative bg-bg-gradient-jet rounded-[14px] p-6 shadow-shadow-1 ' >
              {
                SkillsIcon?.map( skill => (
                  <div key={skill.id} className='flex flex-row cursor-pointer gap-3 p-3 bg-bg-gradient-onyx rounded-[14px] hover:bg-onyx ' >
                      <img 
                        src={skill.icon}
                        className=' w-[25px] '
                      />

                      <p className='text-white-2 text-fs-3 font-fw-500'>{skill.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>        

    </div>
  )
}

export default Resume 