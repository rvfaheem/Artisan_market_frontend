import React, { useEffect, useState } from 'react'
import image from './artist.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const View_exihibition = () => {
    let id=localStorage.getItem('id')

    const [data,setdata]=useState([])
    const[refresh,setrefresh]=useState(false)
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`http://localhost:4000/organiser/viewexihibitions`)
            console.log(response.data)
            setdata(response.data)
        }
        fetchData()
    },[refresh])

    let handledelete=async (id)=>{
        let response=await axios.delete(`http://localhost:4000/organiser/deleteproduct/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }

    const [nav1,setnav1]=useState(true)

    let Toggle1=()=>{
      setnav1(!nav1)
    }
    let ToggleTrue1=()=>{
      setnav1(true)
    }
    let ToggleFalse=()=>{
        setnav1(false)
    }
  return (
    <>
    <div>
    <>
        <div class='organise m-4 p-4'>
      {/* <div>
        <div className='bg-[#D9D9D9]  '>
            </div>
          
         

        </div> */}

      

      

<div class="relative overflow-x-auto">
    <form>
    <div className="flex gap-4">
      {/* <label className='bg-white gap-4'>From Date</label>
      <input type="date" />
      <label className='bg-white gap-4'>To Date</label>
      <input type="date" /> */}
      <input type="text" />
      <button>Search</button>


    </div>
    </form>

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    S.L No
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Exihibition
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Sub-Category
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Description
                </th> */}
                {/* <th scope="col" class="px-6 py-3">
                    Status
                </th> */}
                <th>

                </th>
                <th>

                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
                    {index}
                </td>
                <td class="px-6 py-4">
                    03-02-2024
                </td>
                <td class="px-6 py-4">
                    {item.exihibitionName}
                </td>
                <td class="px-6 py-4">
                    

                 
                 
                </td>
                <td class="px-6 py-4">
                
                </td>
                <td class="px-6 py-4">
                    <img src={`http://localhost:4000/uploads/${item.image}`} onMouseLeave={ToggleFalse} onMouseEnter={Toggle1} className="w-8 h-8" alt="" />
                    
                    </td>
                {/* <td class="px-6 py-4">
                    {item.product.Description}
                </td> */}
                {/* <td class="px-6 py-4">
                    requested
                </td> */}
                <div className='flex pt-2 pb-2 gap-3'>
                <Link to={`/organiser/updateexihibition/${item._id}`}><button className='bg-[#3BD45C] w-[100%] text-white pt-3 pb-3 rounded-xl '>Update</button></Link>
                <button onClick={()=>handledelete(item._id)} className='bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl '>Delete</button>
                </div>
                
            </tr>
))}
        </tbody>
    </table>
</div>



    </div>
    {
                    nav1&&
                    <div className='absolute sm:left-[30%] z-10'>
                    
                        <img  src={image} className="w-96 rounded-[50%]   z-[10] h-96" alt="" />
                    </div> 
                    }    
    </>


    </div>
    
    </>
  )
}

