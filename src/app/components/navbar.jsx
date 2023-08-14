"use client"
import Link from 'next/link'
import { useState } from 'react'
import { menuItems } from './data/testimonialData'

export default function Navbar() {
  const [open,setOpen]=useState(false)

  const handleClick=()=>{
    setOpen(!open)
  }
  
  return (
    <main>
      <div className='w-[70vw]'>
      <div className={`w-[100vw] ${open? "h-[300px]" :"h-[90px]"} bg-[#28205E]`}>
        <div className='text-[30px] md:hidden flex'>
          <button onClick={handleClick}>+</button>
        </div>
        <div className='relative text-[24px] text-cyan-500 font-bold'>
        <h1 >CatCommunity</h1>
        </div > 
        <div className={`${open ? "md:hidden flex space-y-[5px]": "md:flex hidden"}  justify-center flex-col w-100 md:flex-row bg-[#28205E] py-[20px]`}>
          {menuItems.map(items=>(
            <div  key={items.id}>
              <Link href={`/${items.id}`} className='font-medium text-2xl px-4 py-2 text-[#59B2B6]'>{items.name}</Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  )
}
