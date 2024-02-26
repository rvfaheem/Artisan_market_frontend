import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom'

export const User_navigation = () => {

  const [drop,setDrop]=useState(false)
  


  let dropDown=()=>{
    setDrop(!drop)
  }
  return (
 <>
 <div>
     <div className='bg-[#AED0E9] flex p-6 justify-between'>
      <div>ARTISIAN MARKET</div>
      <div className='flex gap-6'>
      <Link to="/user/"><div>HOME</div></Link>
        <Link to="/user/u_profile/"><div>PROFILE</div></Link>
        <Link to="/user/products/"><div>PRODUCTS</div></Link>
        <Link to="/user/view_orders/"><div >ORDERS</div></Link>

        <div ><div onClick={dropDown}>EXIHIBITION</div>
        {drop &&
  <div className='absolute bg-white p-3'>
asdsads
  </div >
}</div>
        <div>OTHERS</div>


      </div>
     </div>
    


    <Outlet />
    </div>
    
    </>
  )
}
