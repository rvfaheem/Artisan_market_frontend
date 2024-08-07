import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Online_Exihibitions = () => {
    const[data,setdata]=useState([''])
    
    useEffect(()=>{
        let fetchData =async ()=>{
            let response=await axios.get(`https://artisan-market-backend.onrender.com/artist/viewonlineexihibitions_b`)

            setdata(response.data); 

            console.log(response.data)
            
            
            


        }
        fetchData()
        
    },[])
  return (
    
    <div>
        <div className='flex sm:gap-4 flex-wrap justify-evenly'>
    <div className='flex sm:gap-4 flex-wrap justify-evenly'>
         {data.map((item)=>(            


<div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
     <img class="rounded-t-lg w-96 h-64 object-cover" src={`https://artisan-market-backend.onrender.com/uploads/${item.image}`} alt="" />
 </a>
 <div class="p-5">
     <a href="#">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.exihibitionName}</h5>
     </a>
     {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
     <span class="font-bold text-gray-700 dark:text-gray-300">START DATE: {new Date(item.startdate).toLocaleDateString()}</span><br />
<span class="font-bold text-gray-700 dark:text-gray-300">END DATE: {new Date(item.enddate).toLocaleDateString()}</span><br /><br />
     <a href={`/artist/exihibition/${item._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
         </svg>
     </a>
 </div>
</div>

))}
</div>
    </div>
    // </div>
  )
}
