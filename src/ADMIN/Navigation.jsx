import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

export const AdminNavigation = () => {
  const [nav,setnav]=useState(true)

  let Toggle=()=>{
    setnav(!nav)
  }
  let ToggleTrue=()=>{
    setnav(true)
  }  
  return (
    <>
    <div className='flex p-5 px-3   bg-indigo-950'>
        
        <div className='w-[500px] text-[30px] '>ARTISAN MARKET</div>
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>        
        
{
  nav&&


    <div className='justify-end w-[100%] items-center flex flex-col sm:flex-row gap-5 text-white'>
      <Link to='/admin'><div>HOME</div></Link>
        <Link to='/admin/organiser'><div>ORGANISER</div></Link>
        <Link to='/admin/artist'><div>ARTIST</div></Link>
        <Link to='/admin/delivery'><div>DELIVERY</div></Link>
        <Link to='/admin/Addcategory'><div>ADD CATEGORY</div></Link>
        <Link to='/admin/addsubcategory'><div>ADD SUBCATEGORY</div></Link>
        <Link to='/admin/changepassword'><div>CHANGE PASSWORD</div></Link>
        <Link to='/Login'><div className='pb-[20px]'>LOGOUT</div></Link>
        
        

    </div>
}
    </div>
    <Outlet/>
    <footer >
      <div className='bg-stone-400 h-5'>

      </div>

    </footer>
    
    </>
  )
}
