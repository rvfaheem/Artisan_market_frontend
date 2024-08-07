import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export const Edit_user_profile = () => {
  // let {id} =useParams()
  const [data,setData]=useState('')
  // const[userdata,setuserdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  // useEffect(()=>{
  //   let fetchdata=async()=>{
  //     let response=await axios.get('https://artisan-market-backend.onrender.com/edit_profile')
  //   }

  // })


  let id=localStorage.getItem('id')
  const[userData,setUserData]=useState('')
  // const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`https://artisan-market-backend.onrender.com/viewprofile/${id}`,)
          console.log(response.data)
          setUserData(response.data)
          
      }
      fetchdata()
  },[])




  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }
    let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      console.log(data);
    }
    let handleSubmit=async (event)=>{
      event.preventDefault()
      let formData = new FormData();
      for (const key in data) {
        if (data[key]) {
          formData.append(key, data[key]);
        }
      }

      let response=await axios.put(`https://artisan-market-backend.onrender.com/editprofile/${id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data'  // Set the content type for FormData
        }
      })
      console.log(response)
      
      console.log(formData);
      toast.success('Updated')
  
    }
  return (
    <>
    <ToastContainer/>
    <div className=' w-screen h-screen'>
        <div className='flex bg-slate-800 justify-center p-5'>



          <div className='w-[40%] h-FIT p-4 bg-white rounded-2xl   '>
            <form onSubmit={handleSubmit} className=''>
              <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
                <p>EDIT</p>
                <p> PROFILE</p>
              </label></div>
              {/* <div className='flex justify-center'>
              
            <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
            <label className='p-4 fond-bold text-[20px]'>1000</label>
            </div> */}
              <div className='p-3'>
                <label>NAME:</label>
                <input onChange={handleChange} placeholder={userData.name} name='name' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' type="text" />
              </div>
              {/* <div className='p-3'>
                <label>CATEGORY:</label>
                <input onChange={handleChange} placeholder={userData.category} type="text" name='gmail' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' />
              </div> */}
              <div className='p-3'>
                <label>IMAGE</label>
                <input onChange={handlefile} type="file" name='image' />
              </div>
              <div className='p-3'>
                <label>G-MAIL:</label>
                <input onChange={handleChange} placeholder={userData.gmail} type="text" name='gmail' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' />
              </div>
              <div className='p-3'>
                <label>PHONE NO:</label>
                <input onChange={handleChange} placeholder={userData.phoneNumber} type="text" name='phoneNumber' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' />
              </div>
              <div className='p-3'>
                <label>ADDRESS:</label>
                <input onChange={handleChange} placeholder={userData.Address} type="text" name='address' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' />
              </div>
              <div className='p-3'>
                <label>Password:</label>
                <input onChange={handleChange}  type="password" name='password' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' />
              </div>
              {/* <div className='p-3'>
                <label>Confirm Password :</label>
                <input onChange={handleChange}  type="password" name='ConfirmPassword' className='w-[100%] mt-1 border-slate-800 p-4 border-b-2 text-[20px] text-black' />
              </div> */}

              <div className='ml-4'>
                <button type='submit' className='p-3 justify-center bg-red-700'>UPDATE</button>
              </div>
            </form>
          </div>

        </div>
      </div>
        </>
  )
}
