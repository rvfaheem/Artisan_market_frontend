import React from 'react'
import { Outlet } from 'react-router-dom'

export const User_navigation = () => {
  return (
 <>
 <div>
     <div className='bg-[#AED0E9] flex p-6 justify-between'>
      <div>ARTISIAN MARKET</div>
      <div className='flex gap-6'>
      <div>HOME</div>
        <div>PRODUCT</div>
        <div>ORDERS</div>
        <div>EXIHIBITION</div>
        <div>OTHERS</div>

      </div>
     </div>


    <Outlet />
    </div>
    
    </>
  )
}
