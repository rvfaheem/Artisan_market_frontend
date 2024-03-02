import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

export const ArtistNavigation = () => {
  const [product,setproduct]=useState(false)
  let dropdown=()=>{
    setproduct(!product)
  }
  let close=()=>{
    setproduct(false)
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
    <div className='flex px-3 p-5  bg-[#AED0E9]'>
        
        <div className='w-[500px] text-[30px] '>ARTISAN MARKET</div>
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
        
{
  nav&&
   
    <div className='justify-end w-[100%] items-center flex flex-col sm:flex-row gap-5'>
        <Link to='/artist'><div>HOME</div></Link>
        <Link to='/artist/artist_profile'><div>PROFILE</div></Link>
        
        <div><span onClick={dropdown}>PRODUCT</span>
          {product &&
                <div className='list-none absolute top-[78px] p-6 bg-[#AED0E9]'>
                  <Link to='/artist/product_add'><li>ADD</li></Link>
                  <Link to='/artist/view_product'><li>View</li></Link>
                </div>
          
          }
        

        </div>
        <Link to="/artist/view_orders"><div>ORDERS</div></Link>
        
        <Link to='/artist/change_password'><div>CHANGE PASSWORD</div></Link>
        <Link to='/Login'><div className='pb-[20px]'>LOGOUT</div></Link>
        
        

    </div>
     }
    </div>
  
    <div onClick={close}>

    <Outlet/>
    </div>
    {/* <footer >
      <div className='bg-[#AED0E9] h-10'>

      </div>

    </footer> */}
    
    </>
  )
}

