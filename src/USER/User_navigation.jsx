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
  const [nav,setnav]=useState(true)

  let Toggle=()=>{
    setnav(!nav)
  }
  let ToggleTrue=()=>{
    setnav(true)
  }   
  return (
 <>
 <div>
     <div className='bg-[#AED0E9] flex flex-wrap p-6 justify-between'>
      <div>ARTISIAN MARKET</div>
      <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
{
  nav&&
    
      <div className='flex flex-col sm:flex-row gap-6 items-start'>
      <Link to="/user/"><div>HOME</div></Link>
        <Link to="/user/u_profile/"><div>PROFILE</div></Link>
        <Link to="/user/products/"><div>PRODUCTS</div></Link>
        <Link to="/user/view_orders/"><div >ORDERS</div></Link>
        <Link to="/user/Exihibition_orders/"><div >EDXIHIBITION ORDERS</div></Link>
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
      }
     </div>
    


    <Outlet />
    </div>
    
    </>
  )
}
