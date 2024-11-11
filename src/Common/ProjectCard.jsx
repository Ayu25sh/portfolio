import { FaGithub } from 'react-icons/fa'; // Import icons
import { IoEyeOutline } from "react-icons/io5";

const ProjectCard = ({ data }) => {
    return (
        <div className=' animate-fadeInScale flex flex-col gap-5 w-full sm:w-[40%] md:w-[30%] lg:w-[31%] min-h-[1rem] h-[21rem] sm:h-[16rem] relative group'>
            {/* Project image container */}
            <div className='bg-bg-gradient-onyx rounded-[14px] p-[1.3rem] sm:p-4 flex justify-center items-center h-[80%] group-hover:p-4 group-hover:opacity-40 transition-all duration-1000 ease-in-out'>
                <img 
                    src={data.image}
                    className='rounded-[14px] w-[100%] shadow-shadow-1 h-[100%] group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out'
                    alt={data.title}
                />
            </div>

            <div className='pl-4 '>
                <p className='text-light-gray text-fs-5 font-fw-400'>{data.title}</p>
                <p className='text-light-gray-70 text-fs-6 font-fw-300'>{data.category}</p>
            </div>

            {/* Container for hover icons */}
            <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-opacity-70 rounded-[14px]">
                {/* Live Project Icon */}
                <a 
                    href={data.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-bg-gradient-onyx flex justify-center items-center p-3 rounded-[8px] w-[60px] h-[60px] transition-all duration-300 ease-in-out"
                >
                    <IoEyeOutline className='text-vegas-gold text-fs-1 font-fw-600' />
                </a>

                {/* GitHub Link Icon */}
                <a 
                    href={data.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-bg-gradient-onyx flex justify-center items-center p-3 rounded-[8px] w-[60px] h-[60px] transition-all duration-300 ease-in-out"
                >
                    <FaGithub className='text-vegas-gold text-fs-1 font-fw-600' />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
