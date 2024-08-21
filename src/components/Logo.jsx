import React from 'react'
import delish from '../assets/images/delsih.png'


const Logo = () => {
  return (
    <div className='flex flex-row m-2'>
        <img className='w-16 h-16 rounded-full mx-2'  src={delish} alt='Logo' />
    <div className="text-xl font-bold m-[10px]">Delish Corner</div>    
    </div>
  )
}

export default Logo