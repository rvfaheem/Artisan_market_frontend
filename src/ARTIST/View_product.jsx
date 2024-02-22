import React from 'react'
import image from './bttle.jpg'

export const View_product = () => {
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
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Artwork
                </th>
                <th scope="col" class="px-6 py-3">
                    E-mail
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    Akshay
                </td>
                <td class="px-6 py-4">
                    <img src={image} className='w-8 h-8' alt="" />
                </td>
                <td class="px-6 py-4">
                    

                 Painting
                 
                </td>
                <td class="px-6 py-4">
                <img src={image} className="w-18 h-8" alt="" />
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
                <button className='bg-[#3BD45C] w-[50%] text-white pt-3 pb-3 rounded-xl '>Update</button>
                <button className='bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl '>Delete</button>
                </div>
                
            </tr>

        </tbody>
    </table>
</div>



    </div>
    </>


    </div>
    
    </>
  )
}
