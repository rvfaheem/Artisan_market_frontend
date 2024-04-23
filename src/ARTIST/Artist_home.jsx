import React, { useEffect, useState } from 'react'
import image from './artist.jpg'
import image1 from './mona-lisa.jpg'
import image2 from './flower.jpg'
import image3 from './box.jpg'
import image4 from './bttle.jpg'
import axios from 'axios'

export const Artist_home = () => {
    const[data,setdata]=useState([''])
    const[data1,setdata1]=useState([''])
    useEffect(()=>{
        let fetchData =async ()=>{
            let response=await axios.get(`http://localhost:4000/artist/viewonlineexihibitions_b`)
            let response1=await axios.get(`http://localhost:4000/artist/viewofflineexihibitions`)
            setdata(response.data.slice(0, 3)); 
            setdata1(response1.data.slice(0, 3)); 
            console.log(response.data)
            
            console.log(response1.data)
            


        }
        fetchData()
        
    },[])








  return (
    <>
            <div>
        <img className='w-screen h-screen' src={image} alt=''/>
        </div>
    {/* <div className='flex'>
        <div>
        <img className='w-screen h-screen' src={image} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image1} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image2} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image3} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image4} alt=''/>
        </div>
        
    </div> */}
    <div><br />
        <h3 class='italic hover:not-italic  text-[50px] bg-fuchsia-200'>Everyone gets a platform to show off their skills and they can use it to make earnings
That is Paper origami, Drawing, painting,flower, gift,sculpture,bottle art,…
</h3>
    </div>
{/* <div className='bg-fuchsia-200'>
    <div className='flex flex-wrap justify-center  '>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>


    </div>
    <div className='flex justify-center  '>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>

    </div>
    <div className='flex justify-center  '>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>

    </div>
    <div className='flex justify-center  '>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>

    </div>
    <div className='flex justify-center '>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>

        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>
        <div>
            <img className='w-36 h-36' src={image} alt=''/>
        </div>

    </div>
</div><br /><br /><br /> */}
        <div>
            <div><br /><br />
            <h1 class="text-gray-900 text-5xl title-font font-medium mb-1">NOTIFICATION OF EXIHIBITION</h1><br /><br />
                
            </div><br /><br />
            <div>
            <h1 class="text-3xl title-font text-gray-500 tracking-widest">ONLINE</h1><br />
                
            </div><br />



            
            <div className='flex sm:gap-4 flex-wrap justify-evenly'>
  

    {data.map((item)=>(            

   <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <a href="#">
        <img class="rounded-t-lg w-96 h-64 object-cover" src={`http://localhost:4000/uploads/${item.image}`} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.exihibitionName}</h5>
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

))}
<div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<a href="artist/exihibitions" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            MORE</a>
</div>

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
</div> */}



            </div>

        </div>
        <div>
        <h1 class="text-3xl title-font text-gray-500 tracking-widest">OFFLINE</h1><br />
                
            </div><br />




            <div className='flex sm:gap-4 flex-wrap'>   
     
{data1.map((item)=>(
   <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <a href="#">
        <img class="rounded-t-lg w-96 h-64" src={`http://localhost:4000/uploads/${item.image}`}  alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="artist/off_exihibition" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

))}


<div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <a href="artist/o_exihibitions" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            MORE</a>
</div>

            </div>

        

    
    </>
  )
}
