import React from 'react'
import image from './artist.jpg'

export const Accept_or_reject = () => {
  return (
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
  <button>Search</button>


</div>

<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                S.L No
            </th>
            <th scope="col" class="px-6 py-3">
                DATE
            </th>
            <th scope="col" class="px-6 py-3">
                PRODUCT
            </th>
            <th scope="col" class="px-6 py-3">
                NAME
            </th>
            <th scope="col" class="px-6 py-3">
                IMAGE
            </th>
            <th scope="col" class="px-6 py-3">
                G-MAIL
            </th>
            <th scope="col" class="px-6 py-3">
                PHONE NO
            </th>
            <th scope="col" class="px-6 py-3">
                ADDRESS
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
                02-02-2024
            </td>
            <td class="px-6 py-4">
                Painting
            </td>
            <td class="px-6 py-4">
            Akshay

             
             
            </td>
            <td class="px-6 py-4">
               <img src={image} className='w-8 h-8' alt="" />
            </td>
            <td class="px-6 py-4">
                akshay@
            </td>
            <td class="px-6 py-4">
                254675654
            </td>
            <td class="px-6 py-4">
                Address1
            </td>
            <div className='flex pt-2 pb-2 gap-3'>
            <button className='bg-[#3BD45C] w-[50%] text-white pt-3 pb-3 rounded-xl '>Accept</button>
            <button className='bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl '>Reject</button>
            </div>
            
        </tr>

    </tbody>
</table>
</div>



</div>
</>
  )
}


