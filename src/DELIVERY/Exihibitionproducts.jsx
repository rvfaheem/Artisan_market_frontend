import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export const Exihibitionproducts = () => {
    let id=localStorage.getItem('id')
    const [data,setdata] =useState([])
    const[refresh,setrefresh]=useState([''])
    useEffect(()=>{
        let fetchData=async()=>{
            let response =await axios.get(`http://localhost:4000/delivery/exhiviewproductorder/${id}`)
            console.log(response.data)
            setdata(response.data)
        }
        fetchData()
    },[])

    let handleSubmit=async(statuss,orderId)=>{
        setrefresh(!refresh)
        console.log(id);
        let response=await axios.put(`http://localhost:4000/delivery/exhimanageDelivery/${orderId}`,{status:'delivered',deliveryId:id})
        console.log(response)
        toast.success('Exihibition product Delivered')
        setdata('')
    }
  return (
    <>
    <ToastContainer/>
        <div class='organise m-4 p-4'>
      {/* <div>
        <div className='bg-[#D9D9D9]  '>
            </div>
          
         



        </div> */}

      

      
{/* <form>
    <div className="flex flex-wrap gap-4">
      <label className='bg-white gap-4 p-4 bg-gray-400'>From Date</label>
      <input type="date" />
      <label className='bg-white gap-4 p-4 bg-gray-400'>To Date</label>
      <input type="date" />
      <input type="text" />
      <button className='bg-green-500 p-4 rounded-xl'>Search</button>


    </div>
</form> */}
<div class="relative overflow-x-auto">


    <table class="w-11/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    S.L No
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Date
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    G-Mail
                </th>
                <th scope="col" class="px-6 py-3">
                    Feedback
                </th>

                <th scope="col" class="px-6 py-3">
                    Phone No
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>               
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
                {/* <td class="px-6 py-4">
                    03-02-2024
                </td> */}
                <td class="px-6 py-4">
                {item.product.productName} 
                </td>
                <td class="px-6 py-4">
                    

                 {item.users.name}
                 
                </td>
                <td class="px-6 py-4">
                {item.users.gmail}
                </td>
                <td class="px-6 py-4">
                Feedback
                </td>
                <td class="px-6 py-4">
                {item.users.phoneNumber} 
                </td>
                <td class="px-6 py-4">
                {item.users.Address} 
                </td>
                <div className='flex pt-2 pb-2 gap-3'>

                {item.order?.status != "delivered" &&
                    <button type='submit' onClick={()=>{handleSubmit('delivered',item.order._id)}} className='bg-[#3BD45C] w-[100%] text-white pt-4 pb-4 rounded-xl '>Delivered</button>
                
                // <button type='submit'  className='bg-red-600 w-[100%] text-white pt-4 pb-4 rounded-xl '>Delivered</button>
                }
                
                </div>
                
            </tr>
))}
        </tbody>
    </table>
</div>



    </div>
    </>
  )
}
