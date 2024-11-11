import React from 'react'
import * as Icons from "react-icons/vsc"



const SidebarCard = ({icon, path, pathName, name }) => {
  const Icon = Icons[icon];
  const desc = pathName.length > 18 ? `${pathName.substring(0, 15)}..` : pathName;

  return (
    <div className='flex gap-[15px] justify-between'>

                  <div className='relative bg-border-gradient-onyx w-[45px] h-[45px] rounded-[8px] flex justify-center items-center text-fs-3 text-orange-yellow-crayola shadow-shadow-1 z-10"' >
                    <Icon/>
                  </div>

                  <div className="flex flex-col max-w-[calc(100%-46px)] w-[calc(100%-46px)]">

                    <p className="text-light-gray-70  text-fs-8 uppercase mb-0.5">{name}</p>
                    {
                      path ? (
                        <a
                          href={path} 
                          target="_blank" 
                          className='text-white-2'
                        >
                          {desc}
                        </a>
                      ):(
                        <p className='text-white-2'>{desc}</p>
                      )
                    }
                    
                  </div>

    </div>
  )
}

export default SidebarCard;