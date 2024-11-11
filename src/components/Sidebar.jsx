// import ContactList from './ContactList';
import React,{useState, useEffect} from "react";
import avatar from '../assets/Images/my-avatar.png'
import SidebarLinks from "../assets/Data/SidebarLinks";
import '../Common/styles.css'
import SidebarCard from "../Common/SidebarCard";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";




const Sidebar = () => {

  const[isOpen, setIsOpen] = useState(window.innerWidth >= 1024);
  const[isWide, setIsWide] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      const wideScreen = window.innerWidth >= 640;
      const largeScreen = window.innerWidth >= 1024;
      setIsWide(wideScreen);

      // Set isOpen to false if width < 1024, otherwise keep it true
      setIsOpen(largeScreen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isOpen)

  return (
    <div className={`flex sticky flex-col p-7 lg:min-h-[calc(100vh-3.5rem)] ease-transition-2 top-[60px] lg:pt-[60px] bg-eerie-black-2 border border-jet rounded-[20px] shadow-shadow-1  `}>

        {
          isWide ? (
            <button className="  absolute top-0 right-0 cursor-pointer p-3 text-[16px] text-orange-yellow-crayola lg:hidden bg-onyx border-[1px] border-jet rounded-bl-20 rounded-tr-20 shadow-shadow-2 z-10 "
                    onClick={ () => setIsOpen(!isOpen)}
            >
              Show Contacts
            </button>
          ) : (
            <button className="absolute top-0 right-0 cursor-pointer p-3 text-[16px] text-orange-yellow-crayola lg:hidden bg-onyx border-[1px] border-jet rounded-bl-20 rounded-tr-20 shadow-shadow-2 z-10 "
                    onClick={ () => setIsOpen(!isOpen)}
            >
              <MdKeyboardArrowDown size={20} />
            </button>
          )
        }

  
        <div className="relative flex flex-row justify-start items-center gap-[15px] lg:flex-col lg:mx-auto ">

          <div className="bg-bg-gradient-onyx rounded-[20px]">
            <img 
              src={avatar}
              alt="logo"
              className="object-cover min-w-[60px] w-[80px] sm:w-[100px] md:w-[150px]   "
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white-2 text-[0.875rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] font-fw-500 tracking-[-0.25px] mb-[15px]">Ayush Khurana</h1>
            <p className="text-light-gray bg-onyx text-fs-8 md:text-fs-7 w-max px-[15px] py-[5px] rounded-[8px]">Software Developer</p>
          </div>



        </div>

        {
          (isOpen || window.innerWidth >= 1024) && (
            <>
              <div className="flex flex-col w-full gap-[50px] mx-auto mb-[20px] " >
                <div className=" mt-10 h-[1px] border-b-[1px] border-b-jet"></div>

                <div className=" flex flex-col md:flex-row md:justify-between lg:flex-col gap-[25px]">
                  {
                    SidebarLinks.map( (link) => (

                      <SidebarCard icon={link.icon} name={link.name} path={link.path} pathName={link.pathName}  key={link.id} />
                      
                    ))
                  }
                </div>

                <div className=" h-[1px] border-b-[1px] lg:hidden border-b-jet"></div>

              </div>

              <div className="flex gap-5 justify-center items mt-5 ">
                <a
                  href="https://www.linkedin.com/in/ayush-khurana-192aaa27b/" 
                  target="_blank" 
                >
                  <FaLinkedin className="text-light-gray-70 rounded-[5px] hover:text-light-gray "  size={20}/>
                </a>
                <a
                  href="https://github.com/Ayu25sh" 
                  target="_blank" 
                >
                  <FaGithub className="text-light-gray-70 rounded-[5px] hover:text-light-gray "  size={20} />         
                </a>
            
              </div>
            </>
          )
        }

        


    </div>
  );
};

export default Sidebar;


