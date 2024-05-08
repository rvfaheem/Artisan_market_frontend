import React, { useEffect, useState } from 'react'
import image from './flower.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Exihibition_product_details = () => {
  let { id } = useParams()
  let userid = localStorage.getItem('id')

  const [data, setdata] = useState([''])

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/user/viewexihibitionproductdetails/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  }, [])

  const [nav, setnav] = useState(false)

  let Toggle = () => {
    setnav(!nav)
  }

  let handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post(`http://localhost:4000/user/exihiaddorder`, { userId: userid, productId: id })
    console.log(response);
    setdata('')
  }

  return (
    <>
      <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>


      <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img class="w-full h-full object-cover" src={`http://localhost:4000/uploads/${data.image}`} alt='' />

                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button onClick={Toggle} class="w-full bg-green-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">PAYMENT</button>
                    </div>
                    {/* <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div> */}
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
                        <span class="text-gray-600 dark:text-gray-300">{data.rate}</span>
                    </div>
                    {/* <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div> */}
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
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Frame:</span>
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


      {nav &&
        <div class="w-full max-w-xs absolute top-60 left-60">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Name
              </label>
              <input name='name' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Phone No
              </label>
              <input name='phoneNumber' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="PhoneNumber" />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Card No
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Card No" />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                MM/YY
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MM/YY" />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                CVV
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="CVV" />
            </div>

            {/* <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div> */}
            <div class="flex items-center justify-between">
              <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
              {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
            </div>
          </form>
          {/* <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
        </div>
      }

    </>
  )
}
