import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const A_registration_form = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    setData({...data,userType:'artist'})
    let response=await axios.post('http://localhost:4000/register',{...data,userType:'artist'})
    console.log(response)
    navigate('/login')
  
    
}
  // const [data,setData]=useState('')
  //    let handleChange=(event)=>{
  //     setData({...data,[event.target.name]:event.target.value})
  //    }

  return (
    <>
    <ToastContainer />
    <div class='  organiser bg-indigo-500 w-screen '>    
    <div className='flex justify-center'>    
      
     
      
        {/* <div className='bg-red-300 w-fit h-fit p-10'> */}
        
        <div>
          <div className='bg-sky-600 w-96 h-fit border-spacing-2 opacity-90 '>
          <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
            {/* <p>REGISTRATION</p>
            <p> FORM</p> */}
            <h1 class="mb-2 text-[20px] font-extrabold text-gray-900 dark:text-white md:text-xl  text-[50px]"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-[20px]">REGISTRATION</span> FORM</h1>
            </label></div>
            
            {/* <div className='flex justify-center'>
              
            <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
            <label className='p-4 fond-bold text-[20px]'>1000</label>
            </div> */}
        <form onSubmit={handleSubmit} >
            <div className='p-3'>
              
              <label>NAME:</label><br />
              <input onChange={handleChange} name="name" className='rounded' type="text" placeholder='name' />
              </div>
              <div className='p-3'>
              <label>IMAGE</label><br />
              <input onChange={handleChange} image="image" className='rounded' type="file" />
              </div>
              <div className='pl-4'>
              <label>CATEGORY:</label><br />
              <input onChange={handleChange} name="category" className='rounded' type="text" placeholder='Category' />
              </div>              
              <div className='p-3'>
              <label>ARTWORK</label><br />
              <input onChange={handleChange} name="artwork" type="file" className='rounded' />
              </div>              
              <div className='p-3'>
              <label>G-MAIL:</label><br />
              <input onChange={handleChange} type="email" name="gmail" placeholder='G-Mail' className='rounded' />
              </div>          
              <div className='p-3'>
              <label>PHONE NO:</label><br />
              <input onChange={handleChange} type="number" pattern="[0-9]{10}" name="phoneNumber" placeholder='phone no' className='rounded'/>
              </div>
              <div className='p-3'>
              <label>ADDRESS:</label><br />
              <input onChange={handleChange} type="text" name="Address" placeholder='address' className='rounded' />
              </div>
              <div className='p-3'>
              <label>PASSWORD:</label><br />
              <input onChange={handleChange} type="text" name="password" placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='rounded' />
              </div>
              <div className='p-3'>
              <label>CONFIRM PASSWORD:</label><br />
              <input onChange={handleChange} type="text" name="confirm_password" placeholder='confirm password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='rounded' />
              </div>
                                          
            <input type='submit' className='p-3 ml-16 justify-center bg-red-600  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-blue-500 group-hover:from-red-700 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"'/>
            {/* <button class=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-blue-500 group-hover:from-red-700 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
SUBMIT
</span>
</button> */}

           <div>
          </div>
            </form>
          </div>
      
        </div>
      </div>
    </div>
    
        </>
  )
}
