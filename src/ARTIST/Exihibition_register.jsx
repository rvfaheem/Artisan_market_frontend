import React from 'react'
import { Link } from 'react-router-dom'

export const Exihibition_register = () => {
  return (
    <>
    <div className=' h-fit'>
    <div className=' bg-red w-96 h-5 '>
        Exihibition Register
    </div>
    <div className='flex justify-center '>
    <div className='bg-slate-800 h-12  '>
        <div className='flex bg-slate-600 p-2'>
         <label className='h-5 w-32 bg-slate-400 '>Product Name</label>
         <input className='h-5' type='text' />
        </div>
        <div className='flex bg-slate-600 p-2'>
         <label className='h-5 w-32 bg-slate-400 '>Name</label>
         <input className='h-5'type='text' />
        </div>
        <div className='flex bg-slate-600 p-2'>
         <label className='h-5 w-32 bg-slate-400 '>Image</label>
         <input className='h-5'type='text' />
        </div>
        <div className='flex bg-slate-600 p-2'>
         <label className='h-5 w-32 bg-slate-400 '>G-mail</label>
         <input className='h-5'type='text' />
        </div>
        <div className='flex bg-slate-600 p-2'>
         <label className='h-5 w-32 bg-slate-400 '>Phone No</label>
         <input className='h-5'type='text' />
        </div>
        <div className='flex bg-slate-600 p-2'>
         <label className='h-5 w-32 bg-slate-400 '>Address</label>
         <input className='h-5'type='text' />
        </div><br /><br /><br />
        <Link to='/artist/exihibition_product_add'><div>
          <button>Register</button>
        </div></Link>

    </div>
    </div>
    </div>
    </>

  )
}
