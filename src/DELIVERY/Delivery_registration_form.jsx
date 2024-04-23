import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const Delivery_registration_form = () => {
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
    try{
      if(data.confirm_password!=data.password){
        toast.error('password doesnt match')
  
      }
      else{    
    let formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', data.image);
        formData.append('idproof', data.idproof);
        formData.append('Experience', data.Experience);
        formData.append('gmail', data.gmail);
        formData.append('phoneNumber', data.phoneNumber);
        formData.append('Address', data.Address);
        formData.append('post',data.post);
        formData.append('district',data.district);
        formData.append('password', data.password);
        formData.append('userType', 'delivery');

        setData({...data,userType:'delivery'})
        let response=await axios.post('http://localhost:4000/register',formData,{
          headers: {
            'Content-Type': 'multipart/form-data'  // Set the content type for FormData
          }
        })
        console.log(response)
        // toast.success('registered')
        navigate('/login')
      }
    }
    
    catch(e){
      toast.error( e.response.data.message || e.message)
    }
      }

  return (
    <>
     <ToastContainer />
    <div class=' bg-blue-200 w-screen '>    
    <div className='flex justify-center'>    
      
     
      
        {/* <div className='bg-red-300 w-fit h-fit p-10'> */}
        <div>
<div className=' opacity-90 m-4 w-[400px] h-FIT'>
            
            <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
            <h1 class="mb-2 text-[30px] font-extrabold text-gray-900 dark:text-white md:text-xl  text-[50px]"><span class="text-[30px] text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-[20px]">Delivery Registration</span> </h1>
              {/* <p>REGISTRATION</p>
              <p> FORM</p> */}
              </label></div>
              
              
              {/* <div className='flex justify-center'>
                
              <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
              <label className='p-4 fond-bold text-[20px]'>1000</label>
              </div> */}
              <form onSubmit={handleSubmit} className='shadow-2xl rounded-md bg-white '>
              <div className='p-3'>

                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="name"  pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed"  type="text" placeholder='name'  />
                </div>
                <div className='p-3'>
                  <label>Image</label>
                <input onChange={handlefile} required className='w-[100%] bor' name="image" type="file" />
                </div>
                {/* <div className='p-3'>
                <input onChange={handleChange} name="category" className='w-[100%] text-black placeholder:text-black border-b-4' type="text" placeholder='G-category' />
                </div>       */}
                <div className='p-3'>
                <label>Id_proof</label>
                <input onChange={handlefile} required name="idproof" className='w-[100%] bor' type="file" />
                </div>
                <div className='p-3'>
                <label>Experience</label>
                <input onChange={handlefile} required name="Experience" className='w-[100%] bor' type="file" />
                </div>                
                <div className='p-3'>
                  
                <input onChange={handleChange} required name="gmail" type='email' className='w-[100%] text-black placeholder:text-black border-b-4'  placeholder='G-Mail' />
                </div>          
                <div className='p-3'>
                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="phoneNumber" type='number'  pattern="[0-9]{10}"  placeholder='phone no'/>
                </div>
                <div className='p-3'> 
                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="Address" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" placeholder='address' />
                </div>
                <div className='p-3'> 
                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="post" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" placeholder='post' />
                </div>
                <div className='p-3'> 
                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="district" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" placeholder='district' />
                </div>
                <div className='p-3'>
                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="password" type="text" placeholder='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                </div>
                <div className='p-3'>
                <input onChange={handleChange} required className='w-[100%] text-black placeholder:text-black border-b-4' name="confirm_password" type="text" placeholder='confirm password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
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