import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


export const Nav = () => {
    const [drop,setdrop]=useState(false)
    let dropdown=()=>{
        setdrop(!drop)

        // const [nav,setnav]=useState(true)

        // let Toggle=()=>{
        //   setnav(!nav)
        // }
        // let ToggleTrue=()=>{
        //   setnav(true)
        // }        
    }
  return (
    <>
    <div className='flex flex-wrap bg-sky-700 justify-between py-7 px-5'>    
    <div>
        <div className='text-4xl'>ARTISAN MARKET</div>
    </div>  
    <div className='flex gap-5' >

    <div><span onClick={dropdown} >Register</span>
        {drop&&
        <div className='list-none absolute right-[30px]sm:right[18px]p-5 bg-sky-700 text-white p-2 sm:top-[60px]'>
            <Link to="/artist/A_registration_form/"><li>Artist</li></Link>
            <Link to="/user/u_registration_form/"><li>User</li></Link>
            <Link to="/organiser/o_registration_form/"><li>Organiser</li></Link>
            <Link to="/delivery/d_registration_form/"><li>Delivery boy</li></Link>
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
