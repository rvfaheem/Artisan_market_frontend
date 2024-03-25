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
    <div class=' organiser w-screen h-100%'>    
    <div className='flex justify-center'>    
      
     
      
        {/* <div className='bg-red-300 w-fit h-fit p-10'> */}
        <div>
<form onSubmit={handleSubmit}>
<div className='bg-sky-600 opacity-85 w-96 h-FIT'>
          <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
            <p>REGISTRATION</p>
            <p> FORM</p>
            </label></div>
            {/* <div className='flex justify-center'>
              
            <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
            <label className='p-4 fond-bold text-[20px]'>1000</label>
            </div> */}
            <div className='p-3'>
              <label>NAME:</label><br />
              <input onChange={handleChange} name="name" type="text" placeholder='name' />
              </div>
              <div className='p-3'>
              <label>IMAGE</label><br />
              <input onChange={handleChange} name="image" type="file" />
              </div>
              <div className='p-3'>
              <label>EXPERIENCE</label><br />
              <input onChange={handleChange} name="experience" type="file" />
              </div>              
              <div className='p-3'>
              <label>G-MAIL:</label><br />
              <input onChange={handleChange} name="gmail" type="email" placeholder='G-Mail' />
              </div>          
              <div className='p-3'>
              <label>PHONE NO:</label><br />
              <input onChange={handleChange} name="phoneNumber" type="number" pattern="[0-9]{10}" placeholder='phone no'/>
              </div>
              <div className='p-3'>
              <label>ADDRESS:</label><br />
              <input onChange={handleChange} name="Address" type="text" placeholder='address' />
              </div>
              <div className='p-3'>
              <label>PASSWORD:</label><br />
              <input onChange={handleChange} name="password" type="text" placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
              </div>
              <div className='p-3'>
              <label>CONFIRM PASSWORD:</label><br />
              <input onChange={handleChange} name="confirm_password" type="text" placeholder='confirm password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
              </div>                            
          <div className=''>
            <button type='submit' className='p-3 justify-center bg-red-700'>SUBMIT</button>
          </div>
          </div> 
</form>
        </div>
      </div>
    </div>
        </>
  )
}
