import React from 'react'

export const Delivery_registration_form = () => {
  return (
    <>
    <div class=' organiser bg-green-300 w-screen h-100%'>    
    <div className='flex justify-center'>    
      
     
      
        <div className='bg-red-300 w-fit h-fit p-10'>
<form>
<div className='bg-sky-600 w-96 h-FIT'>
          <div><label className='p-10 font-bold text-[20px] justify-center flex gap-2'>
            <p>REGISTRATION</p>
            <p> FORM</p>
            </label></div>
            {/* <div className='flex justify-center'>
              
            <label className='p-4 fond-bold text-[20px]'>AMOUNT</label><br /><br /><br /><br /><br />
            <label className='p-4 fond-bold text-[20px]'>1000</label>
            </div> */}
            
            <div className='p-3'>
              <label>NAME:</label><br />
              <input type="text" placeholder='name' />
              </div>
              <div className='p-3'>
              <label>IMAGE</label><br />
              <input type="file" />
              </div>              
              <div className='p-3'>
              <label>ID-PROOF</label><br />
              <input type="file" />
              </div>
              <div className='p-3'>
              <label>EXPERIENCE</label><br />
              <input type="file" />
              </div>
                            
              <div className='p-3'>
              <label>G-MAIL:</label><br />
              <input type="text" placeholder='G-Mail' />
              </div>          
              <div className='p-3'>
              <label>PHONE NO:</label><br />
              <input type="text" placeholder='phone no'/>
              </div>
              <div className='p-3'>
              <label>ADDRESS:</label><br />
              <input type="text" placeholder='address' />
              </div>
              <div className='p-3'>
              <label>PASSWORD:</label><br />
              <input type="text" placeholder='password' />
              </div>
              <div className='p-3'>
              <label>CONFIRM PASSWORD:</label><br />
              <input type="text" placeholder='confirm password' />
              </div>                            
          <div>
            <button className='p-3 justify-center bg-red-700'>SUBMIT</button>
          </div>
          </div>
</form>
        
        </div>
      
      </div>
      
    </div>
        </>
  )
}
