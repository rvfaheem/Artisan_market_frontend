import React, { useEffect, useState } from 'react'
import image from './Artist1.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Delivery_profile = () => {
    let id=localStorage.getItem('id')
    const[userData,setUserData]=useState('id')
    useEffect(()=>{
      let fetchdata=async ()=>{
      let response=await axios.get(`https://artisan-market-backend.onrender.com/viewprofile/${id}`,)
      console.log(response.data)
      setUserData(response.data)
    }
    fetchdata()
  },[])
  return (
    <div>
      

 
    
        <div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    {/* <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />  */}
                    <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img class="h-full w-full rounded-full" src={`https://artisan-market-backend.onrender.com/uploads/${userData.image}`} alt="" />
                    </div>
                </div> 
                <div class="mt-16 flex flex-col items-center">
                    <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                    {userData.name}
                    </h4>
                    {/* <p class="text-base font-normal text-gray-600">{userData.category}</p> */}
                    <p class="text-base font-normal text-gray-600">{userData.gmail}</p>
                    <p class="text-base font-normal text-gray-600">{userData.phoneNumber}</p>
                    <p class="text-base font-normal text-gray-600">{userData.Address}</p><br /><br /><br /><br />
                    <Link to="/delivery/D_profile_edit/"><button className='bg-green-600 rounded w-fit h-fit p-2'>Edit</button></Link>

                </div> 
                {/* <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                    <p class="text-sm font-normal text-gray-600">Posts</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-2xl font-bold text-navy-700 dark:text-white">
                        9.7K
                    </p>
                    <p class="text-sm font-normal text-gray-600">Followers</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-2xl font-bold text-navy-700 dark:text-white">
                        434
                    </p>
                    <p class="text-sm font-normal text-gray-600">Following</p>
                    </div>
                </div> */}
            </div>  
            {/* <p class="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" class="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>   */}
        </div>
    
    </div>
  )
}
