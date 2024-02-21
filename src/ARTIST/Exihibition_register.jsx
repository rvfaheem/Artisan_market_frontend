import React from 'react'
import { Link } from 'react-router-dom'

export const Exihibition_register = () => {
  return (
    <>
    <div className='bg-pink-700 '>
    <div className=' bg-red w-96 h-5 '>
        Exihibition Register
    </div>
    <div className='flex justify-center '>
    <div className='bg-slate-800 w-32 h-12 '>
        <div className='flex bg-slate-600'>
         <label>Product Name</label>
         <input type='text' />
        </div>
        <div className='flex bg-slate-600'>
         <label>Name</label>
         <input type='text' />
        </div>
        <div className='flex bg-slate-600'>
         <label>Image</label>
         <input type='text' />
        </div>
        <div className='flex bg-slate-600'>
         <label>G-mail</label>
         <input type='text' />
        </div>
        <div className='flex bg-slate-600'>
         <label>Phone No</label>
         <input type='text' />
        </div>
        <div className='flex bg-slate-600'>
         <label>Address</label>
         <input type='text' />
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
