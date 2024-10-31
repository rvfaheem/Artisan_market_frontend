// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'


// export const Exihibition_register = () => {
//   let {id}=useParams()
//   let userid=localStorage.getItem('id')

//   // useEffect(()=>{
//   //   let fetchData = async()=>{
//   //     let response = await axios.get()
//   //   }
//   // })
  
//   const [data,setData] = useState()

//   let handleChanage=(event)=>{
//     if(event.target.name === 'image'){
      
//     setData({...data,[event.target.name]:event.target.files[0]})

//     }else{
//       setData({...data,[event.target.name]:event.target.value})
//     }
//   }
//   console.log(data);


//   let handleSubmit=async (event)=>{
//     event.preventDefault()

//     const formdata = new FormData()
//     formdata.append("productName",data.productName)
//     formdata.append("name",data.name)
//     formdata.append("category",data.category)
//     formdata.append("image",data.image)
//     formdata.append("email",data.email)
//     formdata.append("phoneNumber",data.phoneNumber)
//     formdata.append("Address",data.Address)
//     formdata.append("userid",userid)
//     formdata.append("exihibitionid",id)
    
    
    

//     console.log(data,'ddtas');
//     // return true

//     let response=await axios.post(`https://artisan-market-backend.onrender.com/artist/exihibitionregister/`,formdata,{
//       headers: {
//         'Content-Type': 'multipart/form-data'  // Set the content type for FormData
//       }
//     })
//     console.log(response);
//     toast.success('Exihibition registered Successfully')
   
//   }  
//   return (
//     <>
//     <ToastContainer/>


// <div class="organise min-h-screen bg-gray-100 p-0 sm:p-12">
//   <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
//     <h1 class="text-2xl font-bold mb-8">EXIHIBITION REGISTER</h1>
//     <form onSubmit={handleSubmit}>
//       <div class="relative z-0 w-full mb-5">
//       <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Product Name</label>
//         <input
//           type="text"
//           name="productName"
//           onChange={handleChanage}
//           placeholder="Product Name"
//           required
//           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//         />
//         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
//         <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
//       </div>
//       <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Name</label>
//       <div class="relative z-0 w-full mb-5">
//         <input
//           type="text"
//           name="name"
//           onChange={handleChanage}
//           placeholder="Name"
//           required
//           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//         />
//         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
//         <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
//       </div>
//       <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Category</label>
//       <div class="relative z-0 w-full mb-5">
//         <input
//           type="text"
//           name="category"
//           onChange={handleChanage}
//           placeholder="Category"
//           required
//           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//         />
//         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
//         <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
//       </div>        

//       <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
// <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" onChange={handleChanage} name='image' id="file_input" type="file"/>

// <div class="relative z-0 w-full mb-5">
// <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >G-Mail</label>
//         <input
//           type="text"
//           name="email"
//           onChange={handleChanage}
//           placeholder="G-Mail"
//           required
//           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//         />
//         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
//         <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
//       </div>
//       <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Phone No</label>
//       <div class="relative z-0 w-full mb-5">
//         <input
//           type="text"
//           pattern="[0-9]{10}"
//           name="phoneNumber"
//           onChange={handleChanage}
//           placeholder="Phone No"
//           required
//           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//         />
//         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
//         <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
//       </div>      



//       <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Address</label>
//       <div class="relative z-0 w-full mb-5">
//         <input
//           type="text"
//           name="Address"
//           onChange={handleChanage}
//           required
//           placeholder="Address "
//           class="pt-3 pb-2  block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//         />
        
//         <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"></label>
//         <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
//       </div>



      
//         <button
//         id="button"
//         type="submit"
//         class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
//       >
//         REGISTER
//       </button>
      
//     </form>
//   </div>
// </div>
//     </>

//   )
// }





import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export const Exihibition_register = () => {

  
  let userid=localStorage.getItem('id')

  let id=localStorage.getItem('id')
  const[userData,setUserData]=useState('')
  // const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/viewprofile/${id}`,)
          console.log(response.data)
          setUserData(response.data)
          
      }
      fetchdata()
  },[])
  


  
  const [data,setData] = useState()

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
    formdata.append("name",data.name)
    formdata.append("category",data.category)
    formdata.append("image",data.image)
    formdata.append("email",data.email)
    formdata.append("phoneNumber",data.phoneNumber)
    formdata.append("Address",data.Address)
    formdata.append("userid",userid)
    formdata.append("exihibitionid",id)
    
    
    

    console.log(data,'ddtas');
    // return true

    let response=await axios.post(`http://localhost:4000/artist/exihibitionregister/`,formdata,{
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }
    })
    console.log(response);
    toast.success('Exihibition registered Successfully')
   
  }  
  return (
    <>
    <ToastContainer/>

    

<div class="organise min-h-screen bg-gray-100 p-0 sm:p-12">
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8">EXIHIBITION REGISTER</h1>
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
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Name</label>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          onChange={handleChanage}
          placeholder="Name"
          value={userData.name}
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Category</label>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="category"
          onChange={handleChanage}
          placeholder="Category"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>        

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" onChange={handleChanage} name='image' id="file_input" type="file"/>

<div class="relative z-0 w-full mb-5">
<label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >G-Mail</label>
        <input
          type="text"
          name="email"
          onChange={handleChanage}
          placeholder="G-Mail"
          value={userData.gmail}
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Phone No</label>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          pattern="[0-9]{10}"
          name="phoneNumber"
          onChange={handleChanage}
          placeholder="Phone No"
          value={userData.phoneNumber}
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>      



      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Address</label>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="Address"
          onChange={handleChanage}
          required
          placeholder="Address "
          value={userData.Address}
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
        REGISTER
      </button>
      
    </form>
  </div>
</div>

    </>

  )
}