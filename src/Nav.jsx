import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


export const Nav = () => {
    const [drop,setdrop]=useState(false)
    let dropdown=()=>{
        setdrop(!drop)
    }
  return (
    <>
    <div className='flex bg-sky-700 justify-between py-7 px-5'>    
    <div>
        <div className='text-4xl'>ARTISAN MARKET</div>
    </div>  
    <div className='flex gap-5' >

    <div><span onClick={dropdown} >Register</span>
        {drop&&
        <div className='list-none absolute right-[30px]sm:right[18px]p-5 bg-sky-700 text-white p-2 sm:top-[60px]'>
            <li>Artist</li>
            <li>User</li>
            <li>Organiser</li>
            <li>Delivery boy</li>
            </div>
        }
        

</div>

<Link to='/login'><div>Login</div></Link>
<login />

</div> 
    </div> 
    
<Outlet/>
    
      

    </>
  )
}
