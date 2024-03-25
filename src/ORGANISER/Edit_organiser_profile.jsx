import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Edit_organiser_profile = () => {
  let id=localStorage.getItem('id')
  const[userData,setUserData]=useState('')
  // const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/viewprofile/${id}`)
          console.log(response.data)
          setUserData(response.data)
      }
      fetchdata()
  },[])

  const [data,setData]=useState('')
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/editprofile/${id}`,data)
    console.log(response);
    setData('')
  }
  return (
    <>
    <div className='bg-green-300 w-screen h-screen'>    
    <div className='flex justify-center'>    
      
     
      
        <div className='bg-red-300 w-fit h-fit p-10'>
          <div className='bg-sky-600 w-96 h-FIT'>
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
              <label>ORGANISER NAME:</label><br />
              <input onChange={handleChange} placeholder={userData.name} name='name' type="text" />
              </div>
              <div className='p-3'>
              <label>IMAGE</label><br />
              <input onChange={handleChange} placeholder={userData.name} name='name' type="file" />
              </div>
              <div className='p-3'>
              <label>PRODUCERS:</label><br />
              <input onChange={handleChange} placeholder={userData.name} name='name' type="text" />
              </div>              
              <div className='p-3'>
              <label>G-MAIL:</label><br />
              <input onChange={handleChange} placeholder={userData.name} name='name' type="text" />
              </div>          
              <div className='p-3'>
              <label>PHONE NO:</label><br />
              <input onChange={handleChange} placeholder={userData.name} name='name' type="text" />
              </div>
              <div className='p-3'>
              <label>ADDRESS:</label><br />
              <input onChange={handleChange} placeholder={userData.name} name='name' type="text" />
              </div>
                           
          <div>
            <button className='p-3 justify-center bg-red-700'>SUBMIT</button>
          </div>
          </form>
          </div>
        </div>
      </div>
    </div>
        </>
  )
}
