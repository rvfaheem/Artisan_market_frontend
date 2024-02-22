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
  
  return (
    <>
    <div className='flex px-3 p-5  bg-[#AED0E9]'>
        
        <div className='w-[500px] text-[30px] '>ARTISAN MARKET</div>
        
    
    <div className='justify-end w-[100%] items-center flex gap-5'>
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
        <div>EXIHIBITION</div>
        <Link to='/artist/change_password'><div>CHANGE PASSWORD</div></Link>
        <Link to='/Login'><div className='pb-[20px]'>LOGOUT</div></Link>
        
        

    </div>
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

