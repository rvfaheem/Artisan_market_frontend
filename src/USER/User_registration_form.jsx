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
    <div class=' organiser w-screen h-100%'>    
    <div className='flex justify-center'>    
      
     
      
        {/* <div className='bg-red-300 w-fit h-fit p-10'> */}
        <div>
<div className='bg-sky-600 opacity-85 w-96 h-FIT'>
            
            <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
              <p>REGISTRATION</p>
              <p> FORM</p>
              </label></div>
              {/* <div className='flex justify-center'>
                
              <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
              <label className='p-4 fond-bold text-[20px]'>1000</label>
              </div> */}
              <form onSubmit={handleSubmit}>
              <div className='p-3'>
                <label>NAME:</label><br />
                <input onChange={handleChange} name="name" type="text" placeholder='name'  />
                </div>
                <div className='p-3'>
                <label>IMAGE</label><br />
                <input onChange={handlefile} name="image" type="file" />
                </div>
                <div className='p-3'>
                <label>ID-PROOF</label><br />
                <input onChange={handlefile} name="id_proof" type="file" />
                </div>                
                <div className='p-3'>
                <label>G-MAIL:</label><br />
                <input onChange={handleChange} name="gmail" type="email" placeholder='G-Mail' />
                </div>          
                <div className='p-3'>
                <label>PHONE NO:</label><br />
                <input onChange={handleChange} name="phoneNumber" type="number" pattern="[0-9]{10}"  placeholder='phone no'/>
                </div>
                <div className='p-3'>
                <label>ADDRESS:</label><br />
                <input onChange={handleChange} name="Address" type="text" placeholder='address' />
                </div>
                <div className='p-3'>
                <label>PASSWORD:</label><br />
                <input onChange={handleChange} name="password" type="text" placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                </div>
                <div className='p-3'>
                <label>CONFIRM PASSWORD:</label><br />
                <input onChange={handleChange} name="confirm_password" type="text" placeholder='confirm password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                </div>                            
            <div>
              <input type="submit" className='p-3 justify-center bg-red-700'/>
            </div>
            </form>
            </div>  
      
        </div>
        
      </div>
    </div>
        </>
  )
}
