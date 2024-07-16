import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
// import User from '../../../backend/models/user.js'

export const AdminNavigation = () => {
  
  const navigate=useNavigate()

  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('gmail')
    navigate('/login')
  }
  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let gmail=localStorage.getItem('gmail')
      let response=await axios.post('https://artisan-market-backend.onrender.com/api/auth/authenticate',{_id:id,gmail:gmail})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='admin'){
        navigate('/login')
      }
 
    }
    auth()
  },[])




  const [nav,setnav]=useState(true)

  let Toggle=()=>{
    setnav(!nav)
  }
  let ToggleTrue=()=>{
    setnav(true)
  }  
  return (
    <>
    <div className='flex p-5 px-3    bg-black text-white'>
        
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
        <Link to='/admin/viewcategories'><div>VIEW CATEGORIES</div></Link>
        {/* <Link to='/admin/changepassword'><div>CHANGE PASSWORD</div></Link> */}
       <button><div onClick={logout} className='pb-[20px]'>LOGOUT</div></button> 
        
        

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
