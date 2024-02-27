import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom'

export const User_navigation = () => {

  const [drop,setDrop]=useState(false)
  const [other,setother]=useState(false)


  let dropDown=()=>{
    setDrop(!drop)
  }
  let dropDown1=()=>{
    setother(!other)
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
        <Link to="/user/exihibition/"><div >EXIHIBITION</div></Link>

        <div ><div onClick={dropDown}>EXIHIBITION NOTIFICATION</div>
        {drop &&
  <div className='list-none absolute bg-[#AED0E9] top-[78px] p-8'>
  <Link to="/user/online_notifications/"><li>ONLINE</li></Link>
  <Link to="/user/offline_notifications/"><li>OFFLINE</li></Link>
  </div >
}</div>
<div ><div onClick={dropDown1}>OTHERS</div>
        {other &&
  <div className='list-none absolute bg-[#AED0E9] top-[78px] pr-16'>
    <Link to="/user/change_password/"><li>CHANGE PASSWORD</li></Link>
    <Link to="/Login"><li>LOGOUT</li></Link>
  </div >
}</div>


      </div>
     </div>
    


    <Outlet />
    </div>
    
    </>
  )
}
