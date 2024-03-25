import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Edit_user_profile = () => {
  // let {id} =useParams()
  const [data,setData]=useState('')
  // const[userdata,setuserdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  // useEffect(()=>{
  //   let fetchdata=async()=>{
  //     let response=await axios.get('http://localhost:4000/edit_profile')
  //   }

  // })


  let id=localStorage.getItem('id')
  const[userData,setUserData]=useState('')
  // const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/viewprofile/${id}`,)
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

      let response=await axios.put(`http://localhost:4000/editprofile/${id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data'  // Set the content type for FormData
        }
      })
      console.log(response)
      
      console.log(formData);
  
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
              <label>NAME:</label><br />
              <input onChange={handleChange} name="name" type="text" placeholder={userData.name} />
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
              <input onChange={handleChange} name="gmail" type="text" placeholder={userData.gmail} />
              </div>          
              <div className='p-3'>
              <label>PHONE NO:</label><br />
              <input onChange={handleChange} name="phoneNumber" placeholder={userData.phoneNumber} type="text" />
              </div>
              <div className='p-3'>
              <label>ADDRESS:</label><br />
              <input onChange={handleChange} name="Address" type="text" />
              </div>
                           
          <div>
            <button type='submit' className='p-3 justify-center bg-red-700'>SUBMIT</button>
          </div>
          </form>
          </div>
        </div>
      </div>
    </div>
        </>
  )
}
