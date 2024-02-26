import React from 'react'

export const Payment = () => {
  return (
    <>
<div className='bg-green-300 w-screen h-screen'>    
<div className='flex justify-center'>    
  
 
  
    <div className='bg-red-300 w-fit h-fit p-10'>
      <div className='bg-sky-600 w-96 h-FIT'>
      <label className='p-28 font-bold text-[40px] justify-center'>PAYMENT</label>
        <div className='flex justify-center'>
          
        <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
        <label className='p-4 fond-bold text-[20px]'>1000</label>
        </div>
        <div className='p-3'>
          <label>NAME:</label><br />
          <input type="text" />
          </div>
          <div className='p-3'>
          <label>PHONE NO:</label><br />
          <input type="text" />
          </div>
          <div className='p-3'>
          <label>CARD NO:</label><br />
          <input type="text" />
          </div>          
          <div className='p-3'>
          <label>MM/YY:</label><br />
          <input type="text" />
          </div>
          <div className='p-3'>
          <label>CVV:</label><br />
          <input type="text" />
          </div>
      <div>
        <button className='p-3 justify-center bg-red-700'>SUBMIT</button>
      </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
