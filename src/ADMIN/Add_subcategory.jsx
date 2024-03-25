import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Add_subcategory = () => {
  let id=localStorage.getItem('id')
  const[category,setcategory]=useState([])
  // const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/admin/viewcategory`,)
        
          console.log(response)
          setcategory(response.data)
          
      }
      fetchdata()
  },[])
  
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);


}

let handleSubmit=async(event)=>{
  event.preventDefault()
  let response=await axios.post(`http://localhost:4000/admin/addsubcategory`,data)
  console.log(response);
  setData('')
  
}
  return (
    <>
    <div>
      
        {/* <img className='w-screen h-screen' src={image}></img> */}
        
        <div class='sub  py-45 bg-center pt-8 ml-34 flex justify-center'>
          <div className='bg-[#AED0E9] flex flex-col justify-center items-center w-9/12 h-70 p-14 ml-9 mb-48 mt-32 gap-4'>
            <form onSubmit={handleSubmit}>
           <div className="flex gap-20 p-7">
           <label className='font-semibold text-[25px] w-96'>ADD CATEGORY</label>
           <div class="relative z-0 w-full mb-5">
        <select
          name="categoryid"
          onChange={handleChange}
          // class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value=""  disabled ></option>
          {category?.map((item)=>(

           <option value={item._id}>{item.category}</option>
             ))}
          {/* <option value="4">Option 4</option>
          <option value="5">Option 5</option> */}
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>           
           {/* <input className='mb-6 px-67 h-8 w-56' type="text" /> */}
            
           </div>
           <div className="flex gap-2 ">
           <label className='font-semibold text-[25px]'>ADD SUB CATEGORY</label>
           <input className='mb-6 px-67 h-8 w-56' type="text" onChange={handleChange} name='sub_category' />
            
           </div>
            <button className= 'p-3 m-2 font-bold text-[26px] bg-green-600 w-28 mt-67' type="submit">Add</button>
           </form>
            <div>
            
              
            
            </div>

          </div>
        

        </div>
      
    </div>
    </>
  )
}
