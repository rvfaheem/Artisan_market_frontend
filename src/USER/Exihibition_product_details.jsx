import React from 'react'
import image from './bttle.jpg'

export const Exihibition_product_details = () => {
  return (
    <div className='flex sm:gap-10 flex-wrap p-4'>
      
    <img className='w-[50%]' src={image} alt='' />
  
  <div className=' bg-slate-600 w-fit p-20'>
      <div>
        <label className='font-bold text-[40px]'>PAINTING 1</label>
      </div>
      <div>
        <label className='font-bold text-[40px]'>PAINTING</label>
      </div>
      <div>
        <label className='font-bold text-[40px]'>DESCRIPTION</label>
      </div>
      <div>
        <label className='font-bold text-[40px]'>SIZE:10″x 10″ CANVAS.</label><br />
        <label className='font-bold '>Approximately 11 1/2″ x 11 1/2″ including the frame.</label>
      </div><br />
      <div >
      <label className='font-bold text-[40px]'>FRAME COLOURS</label><br />
      </div>
      <div className='flex gap-8 '>
        <div>
          <label className='bg-slate-100 p-2 font-bold text-[38px]'>BLACK</label>
        </div>
        <div>
          <label className='bg-slate-100 p-2 font-bold text-[38px]'>WHITE</label>
        </div>

      </div><br /><br />
      <div>
          <label className='bg-slate-400 p-2 font-bold text-[38px]'> ₹1000</label>
      </div>
      <br /><br /><br />
      <button className='bg-lime-500 rounded p-2 font-bold text-[38px]'>PAYMENT</button>

  </div>

  </div>
  )
}
