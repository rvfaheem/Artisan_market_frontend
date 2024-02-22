import React from 'react'
import image from './Artist1.jpg'

export const Assign_delivery = () => {
  return (
    <>
        <>
        <div class='organise m-4 p-4'>
      {/* <div>
        <div className='bg-[#D9D9D9]  '>
            </div>
          
         

        </div> */}

      

      

<div class="relative overflow-x-auto">

    <div className="flex gap-4">
      <label className='bg-white gap-4'>From Date</label>
      <input type="date" />
      <label className='bg-white gap-4'>To Date</label>
      <input type="date" />
      <input type="text" />
      <button>Search</button>


    </div>

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
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    03-02-2024
                </td>
                <td class="px-6 py-4">
                    Bottle Art-1
                </td>
                <td class="px-6 py-4">
                    

                 Bottle-Art
                 
                </td>
                <td class="px-6 py-4">
                 Simple design
                </td>
                <td class="px-6 py-4">
                <img src={image} className='w-8 h-8' alt="" />
                </td>
                <td class="px-6 py-4">
                    Description
                </td>
                <td class="px-6 py-4">
                    requested
                </td>
                <div className='flex pt-2 pb-2 gap-3'>
                <button className='bg-[#3BD45C] w-[100%] text-white pt-3 pb-3 rounded-xl '>Update</button>
                <button className='bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl '>Delete</button>
                </div>
                
            </tr>

        </tbody>
    </table>
</div>



    </div>
    </>
    </>
  )
}
