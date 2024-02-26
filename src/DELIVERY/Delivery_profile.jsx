import React from 'react'
import image from './Artist1.jpg'
import { Link } from 'react-router-dom'

export const Delivery_profile = () => {
  return (
    <div>
      

    <head>
        <link rel="stylesheet" href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" />
    </head>
    
        <div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" /> 
                    <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img class="h-full w-full rounded-full" src={image} alt="" />
                    </div>
                </div> 
                <div class="mt-16 flex flex-col items-center">
                    <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                    Name
                    </h4>
                    <p class="text-base font-normal text-gray-600">Artist(Painting)</p>
                    <p class="text-base font-normal text-gray-600">Name@gmail.com</p>
                    <p class="text-base font-normal text-gray-600">3345670088</p>
                    <p class="text-base font-normal text-gray-600">Address</p><br /><br /><br /><br />
                    <Link to="/delivery/D_profile_edit/"><button className='bg-green-600 rounted w-fit h-fit'>Edit</button></Link>

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
