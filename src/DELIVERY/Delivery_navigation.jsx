import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export const Delivery_navigation = () => {
  return (
    <>
    <div>
        <div className='bg-[#AED0E9] flex p-6 justify-between'>
         <div>ARTISIAN MARKET</div>
         <div className='flex gap-6'>
         
           <Link to='/delivery/'><div>HOME</div></Link>
           <Link to='/delivery/d_profile/'><div>PROFILE</div></Link>
           <Link to='/delivery/delivery_products/'><div>DELIVERY PRODUCTS</div></Link>
           <Link to='/delivery/d_change_password/'><div>CHANGE PASSWORD</div></Link>
           <Link to='/Login'><div>LOGOUT</div></Link>
   
         </div>
        </div>
   
   
       <Outlet />
       </div>
       
       </>
  )
}
