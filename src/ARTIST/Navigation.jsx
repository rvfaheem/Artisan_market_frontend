import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const ArtistNavigation = () => {
  return (
    <>
    <div className='flex px-3 p-5  bg-[#AED0E9]'>
        
        <div className='w-[500px] text-[30px] '>ARTISAN MARKET</div>
        
    
    <div className='justify-end w-[100%] items-center flex gap-5'>
        <Link to='/artist'><div>HOME</div></Link>
        <div>PROFILE</div>
        <div>PRODUCT</div>
        <div>ORDERS</div>
        <div>EXIHIBITION</div>
        <Link to='/artist/change_password'><div>CHANGE PASSWORD</div></Link>
        <Link to='/Login'><div className='pb-[20px]'>LOGOUT</div></Link>
        
        

    </div>
    </div>
    <Outlet/>
    <footer >
      <div className='bg-[#AED0E9] h-10'>

      </div>

    </footer>
    
    </>
  )
}

