import React from 'react'
import Logo from "./Logo"

const Header = () => {

  
  return (
    <div className='h-20 container mx-auto bg-yellow-400 flex items-center justify-between'>
        <div className="flex flex-col px-4">
          <Logo/>
        </div>
        <div className="flex">
            <ul className='flex'>
                <li className='p-4 text-header-text text-[14px]'>SERVICES</li>
                <li className='p-4 text-header-text text-[14px]'>COMPANY</li>
                <li className='p-4 text-header-text text-[14px]'>LIBRARY</li>
                <li className='p-4 text-header-text text-[14px]'>CONTACT US</li>
                <li className='p-4 text-header-text text-[14px]'>EN</li>
                <li className='p-4 text-header-text text-[14px]'>$ US</li>
                <li className='p-4 text-header-text text-[14px]'>$ US</li>
                <li className='p-4 text-header-text text-[14px]'>$ US</li>
                <li className='p-4 text-header-text text-[14px]'>$ US</li>
                <li className='p-4 text-header-text text-[14px]'>$ US</li>
            </ul>
        </div>
    </div>
  )
}

export default Header