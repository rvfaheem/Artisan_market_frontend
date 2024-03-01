import React from 'react'
import { Link } from 'react-router-dom'
import image from './bttle.jpg'

export const View_orders = () => {
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
                
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <div className='flex pt-2 pb-2 gap-3'>
                <Link to='/artist/assign_delivery'><button className='bg-[#3BD45C] w-[100%] text-white pt-4 pb-4 rounded-xl '>Assign Delivery Boy</button></Link>
                
                </div>
                
            </tr>

        </tbody>
    </table>
</div>



    </div>
    </>
  )
}
