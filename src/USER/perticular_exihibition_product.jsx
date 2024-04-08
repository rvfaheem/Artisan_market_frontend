// import React from 'react'
// import React, { useEffect, useState } from 'react'
// import image from './bttle.jpg'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// export const perticular_exihibition_product = () => {
//     const [data, setdata] = useState([''])

//     useEffect(() => {
//         let fetchData = async () => {
//             let response = await axios.get(`http://localhost:4000/user/viewexihibitionproduct`)
//             console.log(response.data)
//             setdata(response.data)
//         }
//         fetchData()
//     }, [])
//     return (
//         <div className='flex sm:gap-4 flex-wrap'>
  
//   {data.map((item)=>(
  
  
//   <div class="container  p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
//     <img class="rounded-xl" src={`http://localhost:4000/uploads/${item.Image}`} alt="" />
//     <div class="flex justify-between items-center">
//       <div>
//         <h1 class="mt-5 text-2xl font-semibold">{item.productName}</h1>
//         <p class="mt-2">$11.99</p>
//         <p class="mt-2">{item.price}</p>
//         <p class="mt-2">{item?.sub_category?.sub_category}</p>
//       </div>
//       <div>
//         <Link to={`/user/exi_prod_details/${item._id}`}><button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button></Link>
//       </div>
//     </div>
//   </div>
//   ))}
  
//         </div>
//     )
//   }
  
