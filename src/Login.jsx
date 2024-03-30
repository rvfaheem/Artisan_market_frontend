import React, {useState} from 'react'
import APP from './App'
import './App.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import {useNavigate} from  'react-router-dom'

export const Login = () => {
  const Navigate=useNavigate()

  const [data,setData]=useState('')

    let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      console.log(data);
    }
    let handleSubmit=async  (event)=>{
      event.preventDefault()
      const requiredFields=['gmail','password'];

      for (const field of requiredFields){
        if (!data[field]){
          return toast.error(`${field} is required`)
        }
      }
      let response=await axios.post('http://localhost:4000/login',data)
      console.log(response);
      if(response.data){
        localStorage.setItem('id',response.data._id)
        if(response.data.userType=='admin'){
          Navigate('/admin')
        }
        else if(response.data.userType=='artist'){
          if(response.data.status=='accept'){
          Navigate('/artist')
        }
        else{
          toast.error("Not accepted Admin")
                    }
        }
        else if(response.data.userType=='user'){
          Navigate('/user')
          
        }
        else if(response.data.userType=='organiser'){
          if(response.data.status=='accept'){
          Navigate('/organiser')
          }
          
          else{
toast.error("Not accepted Admin")
          }
        }
        else if(response.data.userType=='delivery'){
          if(response.data.status=='accept'){
          Navigate('/delivery')
          }
          else{
            toast.error("Not accepted Admin")
                      }
        }
      }
      else{
        toast.error('Invalid credentials')
      }
      
      setData(data)
      console.log(data);
      
  }  
  return (
    <>
<ToastContainer/>
          <section class="back  ">
            <div class="flex mt=2 flex-col items-center justify-center px-6 py-6  mx-auto ">
              <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                
              </a>
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    LOGIN
                  </h1>
                  <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" >
                    <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleChange} type="email" name="gmail" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <button type="submit">LOGIN</button>
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        {/* <div class="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div> */}
                        {/* <div class="ml-3 text-sm"> */}
                          {/* <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label> */}
                        </div>
                      {/* </div> */}
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>


          </section>
    


    </>
  )

}