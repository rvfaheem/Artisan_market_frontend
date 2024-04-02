import React, { useEffect, useState } from 'react'
import image from './exhi2.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const A_Exihibition = () => {
  let {id}=useParams()
  
  const [data,setdata]=useState([''])

  useEffect(()=>{
    let fetchData=async () =>{
      let response=await axios.get(`http://localhost:4000/artist/viewonlineexihibitiondetails/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])
  return (
    <>
    <div>
      <div className='bg-orange-500 w-screen h-screen opacity-75 '>
        <div className='flex'>
        <div>
          <img className='w-11/12 h-96 p-3' src={`http://localhost:4000/uploads/${data?.image}`} alt="" />

        </div>
        <div className='bg-gray-500 w-6/12 h-96 p-11 m-2'>
          <div className='bg-neutral-600'>FROM DATE:{data?.startingdate}
         
          </div>
          <div className='bg-neutral-600'>
          TO DATE:{data?.endingdate}
          </div>
          <p className='p-8 text-[15px]'>
      {data?.exihibitionName} <br />
      {data?.description}
      </p>
          </div>
          <div>

          </div>
          <div>
            
      

      </div>
      

          
        </div>
        <Link to={`/artist/Exihibition_register/${id}`} class="inline-flex items-center px-6 py-4 text-sm font-medium p-14 m-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register-requist</Link>
      </div>
          {/* <Link to="/artist/Exihibition_register"><button class="inline-flex items-center px-6 py-4 text-sm font-medium p-14 m-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >REGISTER REQUIST</button></Link> */}

    </div>
 
    </>



      

    
  )
}
