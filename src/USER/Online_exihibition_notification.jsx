import React, { useEffect, useState } from 'react'
import image from './exhi2.jpg'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export const Online_exihibition_notification = () => {
  let {id}=useParams()
  
  const [data,setdata]=useState([''])

  useEffect(()=>{
    let fetchData=async () =>{
      let response=await axios.get(`https://artisan-market-backend.onrender.com/user/viewonlineexihibitiondetailsuser/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])

  const isOngoing = () => {
    const currentDate = new Date();
    const startDate = new Date(data?.startdate);
    const endDate = new Date(data?.enddate);
console.log(currentDate >= startDate && currentDate <= endDate);
    return currentDate >= startDate && currentDate <= endDate
      
    
  }


  return (
    <div>
      {data && (
        <>



      <div>
        <div class="shadow-2xl  py-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img class="w-full h-full object-cover" src={`https://artisan-market-backend.onrender.com/uploads/${data.image}`} alt='' />

                </div>
                <div class="flex -mx-2 mb-4">
                  <div class="w-1/2 px-2">
                    {/* <button onClick={Toggle} class="w-full bg-green-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Payment</button> */}
                  </div>
                  <div class="w-1/2 px-2">
                    {/* <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button> */}
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data?.exihibitionName}</h2><br />
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data?.sub_category?.sub_category}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <div>
                    <label className='font-bold text-[20px]'>SPONCERS : {data.sponcers}</label><br /><br /><br />
                    
                  </div>
                </p>
                <div class="flex mb-4">
                  <div class="mr-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">START DATE: {new Date(data.startdate).toLocaleDateString()}</span><br />
<span class="font-bold text-gray-700 dark:text-gray-300">END DATE: {new Date(data.enddate).toLocaleDateString()}</span>

                    {/* <span class="text-gray-600 dark:text-gray-300">END DATE : {data.price}</span> */}
                  </div>
                  {/* <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                    <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                  </div> */}
                </div><br /><br /><br /><br />
                {/* <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div> */}
                {/* <div class="mb-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Choose the Frame</span>
                  <div class="flex items-center mt-2">
                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">BLACK</button>
                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">WHITE</button>
                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                  </div>
                </div> */}
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">Exihibition Description:</span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



      

          {isOngoing() && (
            <div>
              <Link to={`/user/exihibition/${data._id}`} className="inline-flex items-center px-6 py-4 text-sm font-medium p-14 m-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Exhibition Products
              </Link>
            </div>
          )}

    
        </>
      )}
    </div>
  )
}
