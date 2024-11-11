import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, Link, matchPath, useLocation } from "react-router-dom"; // Correct import
import NavbarLinks from '../assets/Data/NavbarLinks';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }
    
  return (
    <div className={`${ isMobile ?  "fixed bottom-0 left-0 right-0 w-full rounded-tl-20 rounded-tr-20 z-50 " : "absolute right-0 rounded-bl-20 rounded-tr-20 z-5"}  px-10 w-auto bg-onyx backdrop-blur-md border-[1px] border-jet shadow-shadow-2 '`}>
        <ul className="flex sm:gap-[30px] justify-evenly ">
            {
                NavbarLinks.map( (link,index) => (
                    <li key={index}>
                        <Link to={link?.path}>
                            <p className={`${matchRoute(link?.path)
                                                ? "text-orange-yellow-crayola"
                                                : "text-light-gray"
                                            }   text-fs-13 font-fw-500 py-5 px-2 ease-transition-1`}
                            >
                                {link.title}
                            </p>
                        </Link>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default Navbar