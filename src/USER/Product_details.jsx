import React, { useEffect, useState } from 'react'
import image from './flower.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Product_details = () => {
  let {id}=useParams()
  let userid=localStorage.getItem('id')

  const [data, setdata]=useState([''])

  useEffect(() =>{
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/user/viewproductdetails/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])

  const [nav,setnav]=useState(false)

  let Toggle=()=>{
    setnav(!nav)
  }
  
  let handleSubmit=async (event)=>{
    event.preventDefault()
    let response=await axios.post(`http://localhost:4000/user/addorder`,{userId:userid,productId:id})
    console.log(response);
    setdata('')
  }

  return (
    <>
            <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    
      <div className='flex sm:gap-10 flex-wrap p-4'>
      
        <img className='w-[50%]' src={`http://localhost:4000/uploads/${data.Image}`} alt='' />
      
      <div className=' bg-slate-600 w-fit p-20'>
          <div>
            <label className='font-bold text-[40px]'>{data.productName}</label>
          </div>
          <div>
            <label className='font-bold text-[40px]'>{data?.sub_category?.sub_category}</label>
          </div>
          <div>
            <label className='font-bold text-[40px]'>{data.description}</label>
          </div>
          <div>
            <label className='font-bold text-[40px]'>SIZE:10″x 10″ CANVAS.</label><br />
            <label className='font-bold '>Approximately 11 1/2″ x 11 1/2″ including the frame.</label>
          </div><br />
          <div >
          <label className='font-bold text-[40px]'>FRAME COLOURS</label><br />
          </div>
          {/* <div className='flex gap-8 '>
            <div>
              <label className='bg-slate-100 p-2 font-bold text-[38px]'>BLACK</label>
            </div>
            <div>
              <label className='bg-slate-100 p-2 font-bold text-[38px]'>WHITE</label>
            </div>

          </div> */}
          <div class="max-w-sm mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose the Frame</option>
    <option value="US">BLACK</option>
    <option value="CA">WHITE</option>

  </select>
</div>
          <br /><br />
          <div>
              <label className='bg-slate-400 p-2 font-bold text-[38px]'>{data.price}</label>
          </div>
          <br /><br /><br />
          {/* <Link to="/user/Add_to_cart/"><a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a></Link> */}
          <button className='bg-lime-500 rounded p-2 font-bold text-[38px]' onClick={Toggle}>PAYMENT</button>

      </div>

      </div>

{nav &&
      <div class="w-full max-w-xs absolute top-60 left-60">
  <form  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input name='name' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Phone No
      </label>
      <input name='phoneNumber'  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="PhoneNumber"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Card No
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Card No"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        MM/YY
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MM/YY"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        CVV
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="CVV"/>
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
