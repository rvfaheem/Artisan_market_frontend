import React, { useEffect, useState } from 'react'
import image from './exhi2.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const View_exihibition_register = () => {
    let id=localStorage.getItem('id')
    const [data,setdata]=useState([''])

    useEffect(() =>{
        let fetchData =async ()=>{
            let response =await axios.get(`http://localhost:4000/artist/viewexihibitionregister/${id}`)
            console.log(response.data)
            setdata(response.data)
        }
        fetchData()
    },[])
  return (
    <>
          <form>
<div className="flex gap-4">
  <label className='bg-white gap-4'>From Date</label>
  <input type="date" />
  <label className='bg-white gap-4'>To Date</label>
  <input type="date" />
  <input type="text" />
  <button>Search</button>


</div>
</form>
    <div className='flex justify-center flex-wrap'>


    <div className='flex sm:gap-4 flex-wrap'>
        {data.map((item)=>(

                <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                     <img class="rounded-t-lg" src={`http://localhost:4000/uploads/${item.image}`}  alt="" />
                 </a>
                 <div class="p-5">
                     <a href="#">
                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.exihibition?.exihibitionName} <br /> {item?.name} <br /> {item?.registeration?.name} {item.productName}</h5>
                     </a>
                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                     {/* <a href={`/artist/exihibition/${item._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         Read more
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                         </svg>
                     </a> */}

                     <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         Requested
                          {/* <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                         </svg> */}
                     </a>
                     {/* {item.status=='accept' &&} */}

                     <Link to="/artist/exihibition_product_add/"><a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add Exihibition Product

                     </a></Link>                     
                    
                     
                 </div>
             </div>
             ))}
             
             

             

    </div>
    </div>
    </>
  )
}
