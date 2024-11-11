import React from 'react'

const Header = ({title}) => {
  return (
    <div className='flex flex-col gap-4 '>
        <h1 className='text-fs-9 text-white-1 font-fw-600 pb-[7px] rounded-[5px]'>{title}</h1>

        <div className=' w-[40px]  border-b-[6px] border-b-orange-yellow-crayola rounded-[5px]'></div>
    </div>
  )
}

export default Header