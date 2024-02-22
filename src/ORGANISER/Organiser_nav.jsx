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


  return (
    <>
    <div >
    <div className='flex justify-between bg-fuchsia-600 p-6'>
    <div>
        ARTISAN MARKET
    </div>
        
            <div className='flex justify-between px-5 gap-5'>
              <Link to="/organiser"><div>Home</div></Link>
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
        </div>
        </div>
        <div onClick={close}>
<Outlet />

    </div>
    </>
  )
}
