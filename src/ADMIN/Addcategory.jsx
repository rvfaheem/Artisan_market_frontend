import React, { useState } from 'react'
import image from './category.jpg'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

export const Addcategory = () => {
  let id=localStorage.getItem('id')
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChanage=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    let response=await axios.post(`https://artisan-market-backend.onrender.com/admin/addcategory`,{...data,userId:id})
    console.log(response);
    // navigate('/admin/addsubcategory')
    toast.success('Category Added Successfully')
    setTimeout(() => navigate('/admin/addsubcategory'), 3000); // Delay navigate
    setData('')
  }
  return (
    <>
    <ToastContainer/>
    <div>
      
        {/* <img className='w-screen h-screen' src={image}></img> */}
        
        <div class='organise px-96 bg-center pt-8 ml-30 flex justify-center'>
         
          <div className='bg-[#AED0E9] flex flex-col justify-center items-center w-9/12 h-60 p-14 ml-9 mb-48 mt-32 gap-4 rounded-xl'>
            <form onSubmit={handleSubmit}>
           <div className="flex gap-2">
           <label className='font-semibold text-[25px]'>ADD CATEGORY:</label>
           <input onChange={handleChanage} required name='category' className='mb-6 px-67 h-8 w-56 rounded' type="text" />
            
           </div>
           <div className='text-center'>
            <button className= 'rounded p-3 m-2 font-bold text-[26px] bg-green-600 w-44 mt-67' type="submit">Add</button></div>
           </form>
            <div>
           
              
            
            </div>

          </div>
        

        </div>
      
    </div>
    </>
  )
  // return (
  //   <div className='w-[100%] h-[690px] bg-[#CCDAF6] flex justify-center p-9'>
  //     <div className='h-56 w-96 bg-white p-5 rounded-xl'>
  //       <div className='font-bold text-[25px] text-black font-serif text-center'><label>ADD CATEGORY</label></div>
  //       <form onSubmit={handleSubmit}>
  //       <div className='font-medium text-black mt-3'>CATEGORY:</div>
  //       <div><input  onChange={handleChanage}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='category' type='text'></input>
  //     </div>
  //     <div><button type='submit' className="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-5">SUBMIT</button></div>
  //     </form>
  //   </div>
  //   </div>
  // )
}
