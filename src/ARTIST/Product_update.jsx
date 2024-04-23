import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom"


export const Product_update = () => {
  // let id=localStorage.getItem('id')

  let {id} =useParams()
  const[userData,setUserData]=useState([''])

  const[category,setcategory]=useState([])
  const[subcategory,setsubcategory]=useState([])
    const [data,setData] = useState()


  let handleChanage=(event)=>{
    if(event.target.name === 'Image'){
    setData({...data,[event.target.name]:event.target.files[0]})

    }else{
      setData({...data,[event.target.name]:event.target.value})
    }
  }
  console.log(data);

  useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/admin/viewcategory`,)
          let response1=await axios.get(`http://localhost:4000/artist/Vieweditaddedproducts/${id}`)
          console.log(response)
          console.log(response1)
          setUserData(response1.data)
          setcategory(response.data)
          
      }
      fetchdata()
  },[])
  
 


  let handleSubmit=async (event)=>{
    event.preventDefault()

    const formdata = new FormData()
    for(const key in data){
      if(data[key]){
        formdata.append(key,data[key])
      }
    }
    console.log(formdata,'formdata');
    // formdata.append("productName",data.productName)
    // // formdata.append("Description",data.Description)
    // formdata.append("price",data.price)
    // formdata.append("image",data.Image)
    // formdata.append("sub_categoryid",data.sub_categoryid)
    // formdata.append("artistId",id)

    // console.log(data,'ddtas');
    // return true

    let response=await axios.put(`http://localhost:4000/artist/editaddproduct/${id}`,formdata)
    console.log(response);
   
  }
  const [catId,setCatId]=useState()
  let handleCategory=async(event)=>
  {
    if(event.target.value){
      setCatId(event.target.value)
      let response=await axios.get(`http://localhost:4000/artist/viewsubcategory/${event.target.value}`)
      console.log(response);
        setsubcategory(response.data)
    }
  }
  const  handleSubCategory=(e)=>{
    setData({...data,sub_categoryid:e.target.value})


  }
  return (
    <>
    {userData.map((item)=>(

<div className='bg-teal-700 h-screen w-screen'>
<div class="organise min-h-screen bg-gray-100 p-0 sm:p-12">
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8">Product Update</h1>
    <form onSubmit={handleSubmit}>
      <div class="relative z-0 w-full mb-5">
        <input
          onChange={handleChanage}
          type="text"
          name="productName"
          placeholder={item?.product?.productName}
       
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        {/* <span class="text-sm text-red-600 hidden" id="error">Name is required</span> */}
      </div>


      {/* <FileBase64
      
        onDone={ (event)=>{
          setImage(event.base64)
        } } /> */}

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
      <input onChange={handleChanage} name='Image' class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

      

      <div class="relative z-0 w-full mb-5">
        <select
          
          name="category"
          
          onChange={handleCategory}
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        > 
          <option value=''>choose</option>
        {category?.map((item)=>(

          <option value={item._id}>{item.category}</option>
          ))}
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        {/* <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span> */}
      </div>



      <div class="relative z-0 w-full mb-5">
        <select
          name="select"
         onChange={handleSubCategory}
          
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
<option value=''>choose</option>
          {subcategory?.map((item)=>(

<option value={item._id}>{item.sub_category}</option>
))}

        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        {/* <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span> */}
      </div>
      {/* <div class="relative z-0 w-full mb-5">
        <input
          onChange={handleChanage}
          type="textarea"
          name="Description"
          placeholder="Description"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is</span>
      </div> */}
  
      <div class="relative z-0 w-full mb-5">
        <input
                 onChange={handleChanage}
          type="number"
          name="price"
          placeholder={item?.product?.price}
          class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
        <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"></label>
        {/* <span class="text-sm text-red-600 hidden" id="error">Amount is required</span> */}
      </div>

     

      <button
        id="button"
        type="submit"
        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        UPDATE
      </button>

      {/* {
        JSON.stringify(data)
      } */}

    </form>
  </div>
</div>
</div>
    ))}
    </>
  )
}
