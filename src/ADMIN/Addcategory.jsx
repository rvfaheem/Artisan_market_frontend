import React, { useState } from 'react'
import image from './category.jpg'
import axios from 'axios'

export const Addcategory = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState('')

  let handleChanage=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    let response=await axios.post(`http://localhost:4000/admin/addcategory`,{...data,userId:id})
    console.log(response);
    setData('')
  }
  return (
    <>
    <div>
      
        {/* <img className='w-screen h-screen' src={image}></img> */}
        
        <div class='category px-96 bg-center pt-8 ml-34 flex justify-center'>
         
          <div className='bg-[#AED0E9] flex flex-col justify-center items-center w-9/12 h-70 p-14 ml-9 mb-48 mt-32 gap-4'>
            <form onSubmit={handleSubmit}>
           <div className="flex gap-2">
           <label className='font-semibold text-[25px]'>ADD CATEGORY</label>
           <input onChange={handleChanage} name='category' className='mb-6 px-67 h-8 w-56' type="text" />
            
           </div>
            <button className= 'p-3 m-2 font-bold text-[26px] bg-green-600 w-28 mt-67' type="submit">Add</button>
           </form>
            <div>
           
              
            
            </div>

          </div>
        

        </div>
      
    </div>
    </>
  )
}
