// import React from 'react'
import Header from '../Common/Header'
import skillsData from '../assets/Data/SkillsData'
// import TestimonialsData from '../assets/Data/TestimonialsData'


const About = () => {
  return (
    <div className='m-4 sm:m-8 flex flex-col animate-fadeInScale' >
        <Header title={"About Me"} />

        <div className='flex flex-col mt-10 gap-8'>
            <p className='text-light-gray text-fs-4 font-fw-300 leading-normal'>I'm a Full Stack Web Developer with a passion for crafting robust and efficient backend systems. 
                While adept in both front-end and back-end development, my true thrill lies in architecting the 
                core functionalities that power a seamless user experience.</p>
            <p className='text-light-gray text-fs-4 font-fw-300 leading-normal'>A self-proclaimed tech enthusiast, I'm constantly invigorated by the ever-evolving landscape of the industry. 
                My curiosity extends to emerging technologies like Blockchain and Machine Learning, allowing me to stay informed and 
                integrate these advancements into my solutions when appropriate.</p>
        </div>

        <div className='mt-12'>
            <p className='text-fs-10 text-white-2 font-fw-600'>What I'm Doing</p>

            <div className='grid lg:grid-cols-2  gap-5 md:grid-cols-1 mt-10'>
                {
                    skillsData?.map( skill => (
                        <div key={skill.id} className=' flex flex-col justify-center items-center sm:flex-row  gap-5 bg-border-gradient-onyx relative bg-gradient-onyx p-6 rounded-[14px] shadow-shadow-2 z-10 '>
                            <div>
                                <img 
                                    src={skill.image}
                                    className='min-w-[px] w-[60px] sm:w-[120px]'                                
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-5' >
                                <p className='text-white-2 font-fw-600 text-fs-2 text-center' >{skill.title}</p>

                                <p className='text-light-gray text-fs-4 font-fw-300 leading-normal text-center'>{skill.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


        {/* <div className='mt-10'>

            <p className='text-fs-10 text-white-2 font-fw-600 mb-20'>Testimonials</p>
            <div>
                {
                    TestimonialsData?.length && TestimonialsData.map( data => {
                        const desc = `${data.desc.substring(0,189)}...`
                        
                        return(
                        <div key={data._id} className='flex flex-col gap-5  relative bg-bg-gradient-jet  rounded-[14px] p-6 shadow-shadow-1 '>
                            <img 
                                src={data.image1}
                                className= 'bottom-[90px] absolute w-[90px] aspect-square object-cover bg-bg-gradient-onyx rounded-[20px]'
                            />
                            
                                
                            <p className=' text-white-2 font-fw-600 text-fs-2 ml-28 ' >{data.title}</p>
                           
                            <p className='text-light-gray text-fs-4 leading-normal   '>{desc}</p>
                        </div>
                    )})
                }
            </div>
            
        </div> */}

    </div>
  )
}

export default About