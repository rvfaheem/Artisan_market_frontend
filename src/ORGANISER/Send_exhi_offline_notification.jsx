import axios from 'axios'
import React, { useState } from 'react'

export const Send_exhi_offline_notification = () => {

  const [data,setData] = useState()

  let handleChanage=(event)=>{
    if(event.target.name === 'Image'){
    setData({...data,[event.target.name]:event.target.files[0]})

    }else{
      setData({...data,[event.target.name]:event.target.value})
    }
  }
  console.log(data);


  let handleSubmit=async (event)=>{
    event.preventDefault()

    const formdata = new FormData()
    formdata.append("exihibitionName",data.exihibitionName)
    formdata.append("sponcers",data.sponcers)
    formdata.append("image",data.image)
    formdata.append("venue",data.venue)
    formdata.append("description",data.descrption)
    formdata.append("startingdate",data.startingdate)
    formdata.append("endingdate",data.endingdate)
    
    

    console.log(data,'ddtas');
    // return true

    let response=await axios.post(`http://localhost:4000/organiser/Sendoffline`,formdata)
    console.log(response);
   
  }  
  return (
    <div>
       <>


<div class="min-h-screen bg-gray-100 p-0 sm:p-12">
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8">Send Offline Exihibition</h1>
    <form onSubmit={handleSubmit}>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          onChange={handleChanage}
          name="exihibitionName"
          placeholder="exihibitionName"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <input
          type=""
          onChange={handleChanage}
          name="sponcers"
          placeholder="Sponcers"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        
        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Password is required</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="venue"
          onChange={handleChanage}
          placeholder="Venue"
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
<input name='image' onChange={handleChanage} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

      <div class="relative z-0 w-full mb-5">
        <textarea
          type=""
          onChange={handleChanage}
          name="description"
          placeholder="Description"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Password is required</span>
      </div>

      {/* <fieldset class="relative z-0 w-full p-px mb-5">
        <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose an option</legend>
        <div class="block pt-3 pb-2 space-x-4">
          <label>
            <input
              type="radio"
              name="radio"
              value="1"
              class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="2"
              class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Option 2
          </label>
        </div>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </fieldset> */}

      {/* <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value=""
          onclick="this.setAttribute('value', this.value);"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value="" selected disabled hidden></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Category</label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>
      <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value=""
          onclick="this.setAttribute('value', this.value);"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value="" selected disabled hidden></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Sub category</label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div> */}

       <div class="flex flex-row space-x-4">
        <div class="relative z-0 w-full mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Starting Date</label>
          <input
            type="date"
            name="startingdate"
            onChange={handleChanage}
            placeholder="Starting Date "
            onclick="this.setAttribute('type', 'date');"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
          <span class="text-sm text-red-600 hidden" id="error">Date is required</span>
        </div>
        <div class="relative z-0 w-full">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Ending Date</label>
          <input
            type="date"
            name="endingdate"
            onChange={handleChanage}
            placeholder="Ending Date "
            onclick="this.setAttribute('type', 'time');"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="time" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
          <span class="text-sm text-red-600 hidden" id="error">Time is required</span>
        </div>
      </div> 

      {/* <div class="relative z-0 w-full mb-5">
        <input
          type="number"
          name="money"
          placeholder="Price "
          class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
        <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"></label>
        <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
      </div> */}

      {/* <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="duration"
          placeholder=" "
          class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
        <label for="duration" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Duration</label>
        <span class="text-sm text-red-600 hidden" id="error">Duration is required</span>
      </div> */}

      <button
        id="button"
        type="submit"
        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        Send Artist and Users
      </button>
    </form>
  </div>
</div>
    </>
    </div>
  )
}

