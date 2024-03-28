import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const U_View_orders = () => {

    const [data, setdata] = useState([])
    useEffect(()=>{
        let fetchData=async()=>{
          let response=await axios.get(`http://localhost:4000/user/vieworders`)
          console.log(response.data)
          setdata(response.data)
        }
        fetchData()
      },[])
  return (
    <>
        <div class='organise m-4 p-4'>
      {/* <div>
        <div className='bg-[#D9D9D9]  '>
            </div>
          
         

        </div> */}

      

      

<div class="relative overflow-x-auto">
<form>
    <div className="flex gap-4">
      <label className='bg-white gap-4'>From Date</label>
      <input type="date" />
      <label className='bg-white gap-4'>To Date</label>
      <input type="date" />
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
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Sub-Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>                
                <th scope="col" class="px-6 py-3">
                    Feedback
                </th>

                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th>

                </th>
                <th>

                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                    {item.orders.date}
                </td>
                <td class="px-6 py-4">
                {item.products.productName}
                </td>
                <td class="px-6 py-4">
                {item.category.category}
                    

                 
                 
                </td>
                <td class="px-6 py-4">
                {item.sub_categorie.sub_category}
                </td>
                <td class="px-6 py-4">
                {item.products.price}
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <div className='flex pt-2 pb-2 gap-3'>
                <button className='bg-[#3BD45C] w-[100%] text-white pt-4 pb-4 rounded-xl '>Delivered</button>
                
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
