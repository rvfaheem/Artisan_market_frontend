import React from 'react'

export const Add_subcategory = () => {
  return (
    <>
    <div>
      
        {/* <img className='w-screen h-screen' src={image}></img> */}
        
        <div class='sub  py-45 bg-center pt-8 ml-34 flex justify-center'>
          <div className='bg-[#AED0E9] flex flex-col justify-center items-center w-9/12 h-70 p-14 ml-9 mb-48 mt-32 gap-4'>
            <form>
           <div className="flex gap-20 p-7">
           <label className='font-semibold text-[25px] w-96'>ADD CATEGORY</label>
           <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value=""
          onclick="this.setAttribute('value', this.value);"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value="" selected disabled hidden></option>
          <option value="1">Painting</option>
          <option value="2">Drawing</option>
          <option value="3">Bottle Art</option>
          {/* <option value="4">Option 4</option>
          <option value="5">Option 5</option> */}
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Category</label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>           
           {/* <input className='mb-6 px-67 h-8 w-56' type="text" /> */}
            
           </div>
           <div className="flex gap-2 ">
           <label className='font-semibold text-[25px]'>ADD SUB CATEGORY</label>
           <input className='mb-6 px-67 h-8 w-56' type="text" />
            
           </div>
           </form>
            <div>
            
              
            <button className= 'p-3 m-2 font-bold text-[26px] bg-green-600 w-28 mt-67' type="submit">Add</button>
            
            </div>

          </div>
        

        </div>
      
    </div>
    </>
  )
}
