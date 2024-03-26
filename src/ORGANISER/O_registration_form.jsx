import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const O_registration_form = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    setData({...data,userType:'organiser'})
    let response=await axios.post('http://localhost:4000/register',{...data,userType:'organiser'})
    console.log(response)
    navigate('/login')
  }
  return (
    <>
    <ToastContainer />
    <div class=' organiser bg-indigo-500 w-screen '>    
    <div className='flex justify-center'>    
      
     
      
        {/* <div className='bg-red-300 w-fit h-fit p-10'> */}
        <div>
<form onSubmit={handleSubmit}>
<div className='bg-sky-600 opacity-85 w-96 h-FIT'>
          <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
            {/* <p>REGISTRATION</p>
            <p> FORM</p> */}
            <h1 class="mb-2 text-[20px] font-extrabold text-gray-900 dark:text-white md:text-xl  text-[50px]"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-[20px]">REGISTRATION</span> FORM</h1>
            </label></div>
            {/* <div className='flex justify-center'>
              
            <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
            <label className='p-4 fond-bold text-[20px]'>1000</label>
            </div> */}
            <div className='p-3'>
              <label className=' text-gray-500 font-bold'>NAME:</label><br />
              <input onChange={handleChange} name="name" className='rounded' type="text" placeholder='name' />
              </div>
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>IMAGE</label><br />
              <input onChange={handleChange} className='rounded' name="image" type="file" />
              </div>
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>EXPERIENCE</label><br />
              <input onChange={handleChange} name="experience" type="file" />
              </div>              
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>G-MAIL:</label><br />
              <input onChange={handleChange} className='rounded' name="gmail" type="email" placeholder='G-Mail' />
              </div>          
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>PHONE NO:</label><br />
              <input onChange={handleChange} className='rounded' name="phoneNumber" type="number" pattern="[0-9]{10}" placeholder='phone no'/>
              </div>
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>ADDRESS:</label><br />
              <input onChange={handleChange} className='rounded' name="Address" type="text" placeholder='address' />
              </div>
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>PASSWORD:</label><br />
              <input onChange={handleChange} className='rounded' name="password" type="text" placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
              </div>
              <div className='p-3'>
              <label className=' text-gray-500 font-bold'>CONFIRM PASSWORD:</label><br />
              <input onChange={handleChange} className='rounded' name="confirm_password" type="text" placeholder='confirm password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
              </div>                            
          <div className=''>
            <button type='submit' className='p-3 ml-16 justify-center bg-red-600  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-blue-500 group-hover:from-red-700 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"'>SUBMIT</button>
          </div>
          </div> 
</form>
        </div>
      </div>
    </div>
        </>
  )
}
