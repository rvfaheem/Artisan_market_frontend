import React, {useState} from 'react'
import { Outlet,Link } from 'react-router-dom'


export const Organiser_nav = () => {
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
    <div className='flex flex-wrap justify-between bg-fuchsia-600 p-6'>
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
            <div><span onClick={dropdown}>Exihibition</span>
            {exihi &&
                 <div className='list-none absolute top-[78px] p-4 bg-fuchsia-600'>
                  <Link to='/organiser/create_exihibition'><li>Create</li></Link>
                  <Link to='/organiser/accept_reject'><li>Artist</li></Link>
                  </div>
            }
            </div>
            <div><span onClick={dropdown1}>Notification</span>
            {notification &&
                 <div className='list-none absolute top-[78px] p-4 bg-fuchsia-600'>
                  <Link to='/organiser/send_online/'><li>Send_online</li></Link>
                  <Link to='/organiser/send_offline'><li>Send_offline</li></Link>
            </div>
            }
            </div>
            <div><span onClick={dropdown2}>Other</span>
            {others &&
                 <div className='list-none absolute top-[78px] p-4 bg-fuchsia-600'>
                  <Link to='/organiser/change_password/'><li>Change_password</li></Link>
                  <Link to='/Login'><li>Log out</li></Link>
            </div>
            }
            </div>           
            
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
