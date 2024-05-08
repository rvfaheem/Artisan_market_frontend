import React, { useEffect, useState } from 'react'
import image from './exhi2.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Offline_exihibitions_notifications = () => {
    const [data,setdata]=useState([''])

    useEffect(() =>{
        let fetchData =async ()=>{
            let response=await axios.get(`http://localhost:4000/artist/viewofflineexihibitions`)
            console.log(response.data)
            setdata(response.data)
        }
        fetchData()
    },[])
  return (
    <div>
            <>
    <div className='flex justify-center flex-wrap'><br /><br />

    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">OFFLINE EXIHIBITION NOTIFICATIONS</h1><br /><br /><br /><br />
<div className='flex sm:gap-4 flex-wrap justify-evenly'>
    {data.map((item)=>(

            <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                 <img class="rounded-t-lg w-96 h-80" src={`http://localhost:4000/uploads/${item.image}`} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.exihibitionName}</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                 <Link to={`/user/offline_notification/${item._id}`}><a href="artist/exihibition" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a></Link>
             </div>
         </div>
         ))}
         {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>

</div>
<div className='flex gap-4 '>
            

            <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="artist/exihibition" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>
         

         

</div>
<div className='flex gap-4 '>
            

            <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="artist/exihibition" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div>
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
                 <img class="rounded-t-lg" src={image} alt="" />
             </a>
             <div class="p-5">
                 <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXIHIBITION 2024</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                     </svg>
                 </a>
             </div>
         </div> */}
         

         

</div>
</div>
    </>
    </div>
  )
}
