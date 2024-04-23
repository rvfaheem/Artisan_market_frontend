import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Outlet,Link,useNavigate } from 'react-router-dom'


export const Organiser_nav = () => {

  const navigate=useNavigate()

  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('gmail')
    navigate('/login')
  }
  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let gmail=localStorage.getItem('gmail')
      let response=await axios.post('http://localhost:4000/api/auth/authenticate',{_id:id,gmail:gmail})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='organiser'){
        navigate('/login')
      }
 
    }
    auth()
  },[])


  const [exihi,setexihi]=useState(false)
  const [notification,setnotification]=useState(false)
  const [others,setothers]=useState(false)
  let dropdown=()=>{
    setexihi(!false)
    setnotification(false)
    setothers(false)
  }
  let dropdown1=()=>{
    setnotification(!false)
    setothers(false)
    setexihi(false)


  }
  let dropdown2=()=>{
    setothers(!false)
    setnotification(false)
    setexihi(false)


  }
  let close=()=>{
    setexihi(false)
    setnotification(false)
    setothers(false)
  }
  const [nav,setnav]=useState(true)

  let Toggle=()=>{
    setnav(!nav)
  }
  let ToggleTrue=()=>{
    setnav(true)
  }

  return (
    <>
    <div >
    <div className='flex flex-wrap bg-black text-white items-center justify-between py-7 px-5'> 
    <div>
        ARTISAN MARKET
    </div>
    <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
{
  nav&&
   
        
            <div className='flex flex-col sm:flex-row justify-between px-5 gap-5'>
              <Link to="/organiser"><div>HOME</div></Link>
              <Link to="/organiser/o_profile/"><div>PROFILE</div></Link>
            <div><button onClick={dropdown}>Exihibition</button>
            {exihi &&
                 <div className='list-none absolute top-[78px] p-4 bg-black'>
                  <Link to='/organiser/create_exihibition'><li>Create</li></Link>
                  <Link to='/organiser/viewcreateexihibition/'><li>View Online Exihibition</li></Link>
                  <Link to='/organiser/viewofflineexihibitions/'><li>View Offline Exihibition</li></Link>
                  {/* <Link to='/organiser/updateexihibition/'><li>Update</li></Link> */}
                  <Link to='/organiser/accept_reject'><li>Artist</li></Link>
                  </div>
            }
            </div>
            <div><button onClick={dropdown1}>Notification</button>
            {notification &&
                 <div className='list-none absolute top-[78px] p-4 bg-black'>
                  {/* <Link to='/organiser/send_online/'><li>Send_online</li></Link> */}
                  <Link to='/organiser/send_offline'><li>Send_offline</li></Link>
            </div>
            }
            </div>
            <button onClick={logout}>Log out</button>

            {/* <div><span onClick={dropdown2}>Other</span>
            {others &&
                 <div className='list-none absolute top-[78px] p-4 bg-black'>
                  <Link to='/organiser/change_password/'><li>Change_password</li></Link>
                  <button onClick={logout}><li>Log out</li></button>
            </div>
            }
            </div>            */}
            
            </div>
            } 
        </div>
        </div>
        <div onClick={close}>
<Outlet />

    </div>
    </>
  )
}
