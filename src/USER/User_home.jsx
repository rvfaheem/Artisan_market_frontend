import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from './artist.jpg'
import image1 from './mona-lisa.jpg'
import image2 from './flower.jpg'
import image3 from './box.jpg'
import image4 from './bttle.jpg'
import axios from 'axios'

export const UserHome = () => {

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/Viewcategory`)
            console.log(response)
            setcategory(response.data)
        }
        fetchdata()
    },[])
    const[data,setData]=useState()
    const[category,setcategory]=useState([])
    const[subcategory,setsubcategory]=useState([])
    const [products,setProducts]=useState([])
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
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
    const handleSubCategory=async (e)=>{
        let response=await axios.get(`http://localhost:4000/user/viewsubcategorywiseproducts/${e.target.value}`)
        setProducts(response.data)
    }
    console.log(products);
  return (
<>
    <div className='flex'>
        <div>
        <img className='w-screen h-screen' src={image} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image1} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image2} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image3} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image4} alt=''/>
        </div>
        
    </div><br />
    <div className='flex'>
    <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          onChange={handleCategory}
          value=""
          onclick="this.setAttribute('value', this.value);"
          class="pt-3 pb-2 block w-16 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          {/* <option value="" selected disabled hidden></option>
          <option value="">PAINTING</option>
          <option value="2">DRAWING</option>
          <option value="3">BOTTLE ART</option>
          <option value="4">PLASTIC FLOWER</option>
          <option value="5">SCULPTURE</option>
          <option value="6">WOOLEN THREAD FLOWER</option>
          <option value="7">CARBOAD ARTWORK</option>
          <option value="8">THERMOCOL ITEMS</option>
          <option value="9">GREETING CARDS</option>
          <option value="10">PAPER ORIGAMI</option> 
          <option value="11">PLASTER OF PARIS</option> 
                              */}
          <option value=''>choose</option>
          {category?.map((item)=>(
            <option value={item._id}>{item.category}</option>
          ))}
        </select>
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
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>
        
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Category</label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>
    {/* <button className=' rounded p-4 bg-lime-500'>Search</button> */}
    </div>
    <div>
    <div className='flex sm:gap-4 flex-wrap'>
    {products.map((item)=>(


<div class="container  p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
  <img class="rounded-xl" className='w-72 h-64' src={`http://localhost:4000/uploads/${item.Image}`} alt="" />
  <div class="flex justify-between items-center">
    <div>
      <h1 class="mt-5 text-2xl font-semibold">{item.productName}</h1>
      <p class="mt-2">$11.99</p>
      <p class="mt-2">{item.price}</p>
      <p class="mt-2">{item?.sub_category?.sub_category}</p>
    </div>
    <div>
      <Link to={`/user/product_details/${item._id}`}><button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button></Link>
    </div>
  </div>
</div>
))}
    </div>
    </div>

    
    {/* <div>
        <div>PAINTING</div><br />
        <div className='flex gap-6'>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>            
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-2/12'><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='bg-lime-600 h-5 w-28 p-8 rounded'>MORE</button>
            </div>
        </div>
        
    </div>
    <div>
        <div>DRAWING</div><br />
        <div className='flex gap-6'>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>            
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-2/12'><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='bg-lime-600 h-5 w-28 p-8 rounded'>MORE</button>
            </div>
        </div>
        
    </div>
    <div>
        <div>PAINTING</div><br />
        <div className='flex gap-6'>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>            
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-2/12'><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='bg-lime-600 h-5 w-28 p-8 rounded'>MORE</button>
            </div>
        </div>
        
    </div>         */}
    






            

        

    
    </>
  )
}
