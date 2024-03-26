import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export const User_registration_form = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')


  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    let formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', data.image);
        formData.append('id_proof', data.id_proof);
        formData.append('gmail', data.gmail);
        formData.append('phoneNumber', data.phoneNumber);
        formData.append('Address', data.Address);
        formData.append('password', data.password);
        formData.append('userType', 'user');

    setData({...data,userType:'user'})
    let response=await axios.post('http://localhost:4000/register',formData,{
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }
    })
    console.log(response)
    // toast.success('registered')
    navigate('/login')

  }
  return (
    <>
     <ToastContainer />
    <div class=' organiser bg-indigo-500 w-screen '>    
    <div className='flex justify-center'>    
      
     
      
        {/* <div className='bg-red-300 w-fit h-fit p-10'> */}
        <div>
<div className='bg-sky-600 opacity-100 w-96 h-FIT'>
            
            <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
            <h1 class="mb-2 text-[20px] font-extrabold text-gray-900 dark:text-white md:text-xl  text-[50px]"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-[20px]">REGISTRATION</span> FORM</h1>
              {/* <p>REGISTRATION</p>
              <p> FORM</p> */}
              </label></div>
              
              
              {/* <div className='flex justify-center'>
                
              <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
              <label className='p-4 fond-bold text-[20px]'>1000</label>
              </div> */}
              <form onSubmit={handleSubmit}>
              <div className='p-3'>
              <label class=" text-gray-500 font-bold ">
         NAME
      </label><br />
                <input onChange={handleChange} className='rounded' name="name" type="text" placeholder='name'  />
                </div>
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>IMAGE</label><br />
                <input onChange={handlefile} className='rounded' name="image" type="file" />
                </div>
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>ID-PROOF</label><br />
                <input onChange={handlefile} name="id_proof" type="file" />
                </div>                
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>G-MAIL:</label><br />
                <input onChange={handleChange} name="gmail" type="email" placeholder='G-Mail' />
                </div>          
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>PHONE NO:</label><br />
                <input onChange={handleChange} className='rounded' name="phoneNumber" type="number" pattern="[0-9]{10}"  placeholder='phone no'/>
                </div>
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>ADDRESS:</label><br />
                <input onChange={handleChange} className='rounded' name="Address" type="text" placeholder='address' />
                </div>
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>PASSWORD:</label><br />
                <input onChange={handleChange} className='rounded' name="password" type="text" placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                </div>
                <div className='p-3'>
                <label className=' text-gray-500 font-bold'>CONFIRM PASSWORD:</label><br />
                <input onChange={handleChange} className='rounded' name="confirm_password" type="text" placeholder='confirm password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                </div>                            
            <div>
              <input type="submit" className='p-3 ml-16 justify-center bg-red-600  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-blue-500 group-hover:from-red-700 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"'/>
            </div>
            </form>
            </div>  
      
        </div>
        
      </div>
    </div>
        </>
  )
}
