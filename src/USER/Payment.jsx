import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Payment = () => {
  let {id}=useParams()
  let userid=localStorage.getItem('id')
  const [data,setData]=useState('')

  useEffect(() =>{
    let fetchData = async () =>{
      let response = await axios.get(`http://localhost:4000/user/viewproductdetails/${id}`)
      console.log(response.data)
      setData(response.data)
    }
    fetchData()
  },[])

  let handleChanage=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    let response=await axios.post(`http://localhost:4000/user/payment`,{userId:userid,productId:id})
    console.log(response);
    setData('')
  }
  return (
    <>
<div className='bg-green-300 w-screen h-screen'>    
<div className='flex justify-center'>    
  
 
  
    <div className='bg-red-300 w-fit h-fit p-10'>
      <div className='bg-sky-600 w-96 h-FIT'>
      <label className='p-28 font-bold text-[40px] justify-center'>PAYMENT</label>
        <div className='flex justify-center'>
          
        <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
        <label className='p-4 fond-bold text-[20px]'>{data.price}</label>
        </div>
     <form onSubmit={handleSubmit}>
        <div className='p-3'>
          <label>NAME:</label><br />
          <input name='name' required onChange={handleChanage} type="text" />
          </div>
          <div className='p-3'>
          <label>PHONE NO:</label><br />
          <input name='phoneNumber' required onChange={handleChanage} type="text" />
          </div>
          <div className='p-3'>
          <label>CARD NO:</label><br />
          <input onChange={handleChanage} required name='cardno' type="text" />
          </div>          
          <div className='p-3'>
          <label>MM/YY:</label><br />
          <input onChange={handleChanage} required name='mmyy' type="text" />
          </div>
          <div className='p-3'>
          <label>CVV:</label><br />
          <input onChange={handleChanage} required name='cvv' type="text" />
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
