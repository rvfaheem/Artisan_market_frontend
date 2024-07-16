import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet,Link,useNavigate } from 'react-router-dom'

export const Delivery_navigation = () => {
  const[data,setdata]=useState('')

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
      console.log(response.data)
      setdata(response.data)
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='delivery'){
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
    <div>



    <nav class='bg-black text-white '>
  <div class=" flex flex-wrap items-center justify-between  p-6">
        <div>ARTISIAN MARKET</div>
    <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {
      nav &&

      <div className='sm:flex flex-wrap  sm:gap-6'>
       <mark class="px-2 text-xl text-white bg-blue-600 rounded dark:bg-blue-500">Welcome {data.name}</mark>   
      <Link to='/delivery/'><div>HOME</div></Link>
      <Link to='/delivery/d_profile/'><div>PROFILE</div></Link>
      <Link to='/delivery/delivery_products/'><div>DELIVERY PRODUCTS</div></Link>
      <Link to='/delivery/exihibitionproducts/'><div>EXIHIBITION PRODUCTS</div></Link>
      {/* <Link to='/delivery/d_change_password/'><div>CHANGE PASSWORD</div></Link> */}
      <button onClick={logout}>LOGOUT</button>
      
    </div>
    }
    
  </div>
</nav>








        {/* <div className='bg-[#AED0E9] flex flex-wrap p-6 justify-between'>
         <div>ARTISIAN MARKET</div>
         <svg onClick={Toggle} className='sm:hidden' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
{
  nav &&
         <div className='flex flex-wrap sm:gap-6'>
         
           <Link to='/delivery/'><div>HOME</div></Link>
           <Link to='/delivery/d_profile/'><div>PROFILE</div></Link>
           <Link to='/delivery/delivery_products/'><div>DELIVERY PRODUCTS</div></Link>
           <Link to='/delivery/d_change_password/'><div>CHANGE PASSWORD</div></Link>
           <Link to='/Login'><div>LOGOUT</div></Link>
           
         </div>
}
        </div> */}
   
   
       <Outlet />
       </div>
       
       </>
  )
}
