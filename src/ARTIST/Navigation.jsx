import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

export const ArtistNavigation = () => {
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
      let response=await axios.post('http://localhost:4000/api/auth/authenticate',{_id:id,gmail:gmail})
      console.log(response);
      console.log(response.data)
      setdata(response.data)
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='artist'){
        navigate('/login')
      }
 
    }
    auth()
  },[])


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
    <div className='flex px-3 p-5  bg-black text-white'>
        
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
      <mark class="px-1  text-white bg-blue-600 rounded dark:bg-blue-500">Welcome {data.name}</mark>
        <Link to='/artist'><div>HOME</div></Link>
        
        <Link to='/artist/artist_profile'><div>PROFILE</div></Link>
        
        <div><button onClick={dropdown}>PRODUCT</button>
          {product &&
                <div className='list-none absolute top-[78px] p-6 bg-black'>
                  <Link to='/artist/product_add'><li>ADD PRODUCTS</li></Link>
                  <Link to='/artist/view_product'><li>VIEW PRODUCTS</li></Link>
                  <Link to='/artist/view_exihibition_register'><li>VIEW ACCEPTED EXIHIBITIONS</li></Link>
                </div>
          
          }
        

        </div>
        <Link to="/artist/view_orders"><div>ORDERS</div></Link>
        <Link to="/artist/view_deivered_product"><div>VIEW DELIVERED PRODUCT</div></Link>
        <Link to="/artist/Exihibitionorders/"><div>EXIHIBITION ORDERS</div></Link>
        <Link to="/artist/viewexihibitionproducts/"><div>VIEW EXIHIBITION PRODUCTS</div></Link>
        {/* <Link to="/artist/Exihiorders/"><div>EXIHIBITION ORDERS</div></Link> */}
        
        {/* <Link to='/artist/change_password'><div>CHANGE PASSWORD</div></Link> */}
        <button onClick={logout} className='pb-[20px]'>LOGOUT</button>
        
        

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

