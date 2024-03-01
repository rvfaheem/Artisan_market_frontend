import React from 'react'
import { Link } from 'react-router-dom'

export const Exihibition_register = () => {
  return (
    <>


<div class="organise min-h-screen bg-gray-100 p-0 sm:p-12">
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8">EXIHIBITION REGISTER</h1>
    <form id="form" novalidate>
      <div class="relative z-0 w-full mb-5">
      <label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >Product Name</label>
        <input
          type="text"
          name=""
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
          name=""
          placeholder="Name"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>      

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

<div class="relative z-0 w-full mb-5">
<label class="block mb-2 text-sm font-medium text-orange-300 dark:text-white" >G-Mail</label>
        <input
          type="text"
          name=""
          placeholder="G-Mail"
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
          name=""
          placeholder="Phone No"
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
          placeholder="Address "
          class="pt-3 pb-2  block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        
        <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
      </div>



      <Link to="/artist/exihibition_product_add/"><button
        id="button"
        type="button"
        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        REGISTER
      </button></Link>
    </form>
  </div>
</div>
    </>

  )
}
