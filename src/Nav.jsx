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
    <div className='flex flex-wrap bg-black text-white items-center justify-between py-7 px-5'>    
    <div>
        <div className='text-4xl'>ARTISAN MARKET</div>
    </div>  
    <div className='flex gap-5' >
    <Link to='/'><div>Home</div></Link>

    <div><button onClick={dropdown} >REGISTER</button>
        {drop&&
        <div className='list-none absolute z-[200] w-24 right-[30px]sm:right[18px]p-5 bg-black text-white p-2 sm:top-[60px]'>
            <Link to="/A_registration_form/"><li>Artist</li></Link>
            <Link to="/u_registration_form/"><li>User</li></Link>
            <Link to="/o_registration_form/"><li>Organiser</li></Link>
            <Link to="/d_registration_form/"><li>Delivery boy</li></Link>
            </div>
        }
        

</div>

<Link to='/login'><div>LOGIN</div></Link>
<login />

</div> 
    </div> 

 <div>
    
    </div>   
    
<Outlet/>
    
      

    </>
  )
}
