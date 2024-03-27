import React, { useEffect, useState } from 'react'
import image from './flower.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Product_details = () => {
  let {id}=useParams()

  const [data, setdata]=useState([''])

  useEffect(() =>{
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/user/viewproductdetails/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])
  return (

    
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
          <form class="max-w-sm mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose the Frame</option>
    <option value="US">BLACK</option>
    <option value="CA">WHITE</option>

  </select>
</form>
          <br /><br />
          <div>
              <label className='bg-slate-400 p-2 font-bold text-[38px]'>{data.price}</label>
          </div>
          <br /><br /><br />
          <Link to="/user/Add_to_cart/"><a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a></Link>
          <Link to={`/user/payment/${data._id}`}><button className='bg-lime-500 rounded p-2 font-bold text-[38px]'>PAYMENT</button></Link>

      </div>

      </div>
  )
}
