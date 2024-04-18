import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Product_detail_nav = () => {
    let { id } = useParams()
    let userid = localStorage.getItem('id')
  
    const [data, setdata] = useState([''])
  
    useEffect(() => {
      let fetchData = async () => {
        let response = await axios.get(`http://localhost:4000/user/viewproductdetails/${id}`)
        console.log(response.data)
        setdata(response.data)
      }
      fetchData()
    }, [])
  return (
    <div>
        <div>
        <div>
        <div class="bg-gray-100 dark:bg-gray-800 py-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img class="w-full h-full object-cover" src={`http://localhost:4000/uploads/${data.Image}`} alt='' />

                </div>
                <div class="flex -mx-2 mb-4">
                  <div class="w-1/2 px-2">
                    <Link to='/login'><button class="w-full bg-green-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Buy</button></Link>
                  </div>
                  <div class="w-1/2 px-2">
                    {/* <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button> */}
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.productName}</h2><br />
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data?.sub_category?.sub_category}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <div>
                    <label className='font-bold text-[20px]'>SIZE:10″x 10″ CANVAS.</label><br />
                    <label className='font-bold '>Approximately 11 1/2″ x 11 1/2″ including the frame.</label>
                  </div>
                </p>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                    <span class="text-gray-600 dark:text-gray-300">${data.price}</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                    <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                  </div>
                </div>
                {/* <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div> */}
                <div class="mb-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Choose the Frame</span>
                  <div class="flex items-center mt-2">
                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">BLACK</button>
                    <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">WHITE</button>
                    {/* <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button> */}
                  </div>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        </div>
    </div>
  )
}