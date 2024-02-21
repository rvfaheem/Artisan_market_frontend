import React from 'react'
import image from './category.jpg'

export const Addcategory = () => {
  return (
    <>
    <div>
      
        {/* <img className='w-screen h-screen' src={image}></img> */}
        
        <div class='category px-96 bg-center pt-8 ml-34 flex justify-center'>
          <div className='bg-[#AED0E9] flex flex-col justify-center items-center w-9/12 h-70 p-14 ml-9 mb-48 mt-32 gap-4'>
           <div className="flex gap-2">
           <label className='font-semibold text-[25px]'>ADD CATEGORY</label>
           <input className='mb-6 px-67 h-8 w-56' type="text" />
            
           </div>
            <div>
              
            <button className= 'p-3 m-2 font-bold text-[26px] bg-green-600 w-28 mt-67' type="submit">Add</button>
            
            </div>

          </div>
        

        </div>
      
    </div>
    </>
  )
}
