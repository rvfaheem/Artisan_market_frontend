import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const AdminNavigation = () => {
  return (
    <>
    <div className='flex px-3 p-5  bg-[#66DECF]'>
        
        <div className='w-[500px] text-[30px] '>ARTISAN MARKET</div>
        
    
    <div className='justify-end w-[100%] items-center flex gap-5'>
      <Link to='/admin'><div>HOME</div></Link>
        <Link to='/admin/organiser'><div>ORGANISER</div></Link>
        <Link to='/admin/artist'><div>ARTIST</div></Link>
        <Link to='/admin/delivery'><div>DELIVERY</div></Link>
        <Link to='/admin/Addcategory'><div>ADD CATEGORY</div></Link>
        <Link to='/admin/addsubcategory'><div>ADD SUBCATEGORY</div></Link>
        <Link to='/admin/changepassword'><div>CHANGE PASSWORD</div></Link>
        <Link to='/Login'><div className='pb-[20px]'>LOGOUT</div></Link>
        
        

    </div>
    </div>
    <Outlet/>
    <footer >
      <div className='bg-stone-400 h-5'>

      </div>

    </footer>
    
    </>
  )
}
