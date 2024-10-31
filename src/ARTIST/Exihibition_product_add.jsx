import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export const Exihibition_product_add = () => {
  let {id}=useParams()
  let userid=localStorage.getItem('id')
  const[category,setcategory]=useState([])
  const[subcategory,setsubcategory]=useState([]) 
  const navigate=useNavigate()
  
  const [data,setData] = useState()

useEffect(()=>{
  let fetchData=async ()=>{
    let response =await axios.get(`https://artisan-market-backend.onrender.com/admin/viewcategory`,)
    console.log(response)
    setcategory(response.data)
  }
  fetchData()
},[])

  let handleChanage=(event)=>{
    if(event.target.name === 'image'){
    setData({...data,[event.target.name]:event.target.files[0]})

    }else{
      setData({...data,[event.target.name]:event.target.value})
    }
  }
  console.log(data);


  let handleSubmit=async (event)=>{
    event.preventDefault()

    const formdata = new FormData()
    formdata.append("productName",data.productName)
    formdata.append("category",data.category)
    formdata.append("image",data.image)
    formdata.append("artist",data.artist)
    formdata.append("rate",data.rate)
    formdata.append("description",data.description)
    formdata.append("exihibitionid",id)
    formdata.append("artistid",userid)
    formdata.append("sub_categoryid",data.sub_categoryid)

    
    

    console.log(data,'ddtas');
    // return true

    let response=await axios.post(`https://artisan-market-backend.onrender.com/artist/exihibitionproductadd`,formdata,{
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }
    })
    console.log(response);
    toast.success('Exihibition product Added Successfully')
    setTimeout(() => navigate('/artist'), 3000); // Delay navigate

   
  }

  const [catId,setcatId]=useState()
  let handleCategory=async(event)=>{
    if(event.target.value){
      setcatId(event.target.value)
      let response=await axios.get(`https://artisan-market-backend.onrender.com/artist/viewsubcategory/${event.target.value}`)
      console.log(response);
      setsubcategory(response.data)
    }
  } 
  const handleSubCategory=(e)=>{
    setData({...data,sub_categoryid:e.target.value})
  }
  return (
    <>
<ToastContainer/>

<div class="organise min-h-screen bg-gray-100 p-0 sm:p-12">
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8">EXIHIBITION PRODUCT ADD</h1>
    <form onSubmit={handleSubmit}>
      <div class="relative z-0 w-full mb-5">
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Product Name</label>
        <input
          type="text"
          name="productName"
          onChange={handleChanage}
          placeholder="Product Name"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Category</label>
      {/* <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="category"
          onChange={handleChanage}
          placeholder="Name"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>       */}

      <div class="relative z-0 w-full mb-5">
        <select
          
          name="category"
          
          onChange={handleCategory}
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        > 
          <option required value=''>choose</option>
        {category?.map((item)=>(

          <option value={item._id}>{item.category}</option>
          ))}
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>



      <div class="relative z-0 w-full mb-5">
        <select
          name="select"
         onChange={handleSubCategory}
         required
          
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
<option value=''>choose</option>
          {subcategory?.map((item)=>(

<option required value={item._id}>{item.sub_category}</option>
))}

        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>

<div class="relative z-0 w-full mb-5">
<label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Creator</label>
        <input
          type="text"
          name="artist"
          onChange={handleChanage}
          placeholder="Artist"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
<input name='image' onChange={handleChanage} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>      
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Description</label>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="description"
          onChange={handleChanage}
          placeholder="Description"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>      



      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Rate</label>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="rate"
          onChange={handleChanage}
          required
          placeholder="Rate "
          class="pt-3 pb-2  block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        
        <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
      </div>



      <button
        id="button"
        type="submit"
        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        ADD
      </button>
    </form>
  </div>
</div>
    </>
  )
}
