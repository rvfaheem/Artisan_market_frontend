import React from 'react'

export const A_profile_edit = () => {
  return (
    <>
    <div className='bg-green-300 w-screen h-screen'>    
    <div className='flex justify-center'>    
      
     
      
        <div className='bg-red-300 w-fit h-fit p-10'>
          <div className='bg-sky-600 w-96 h-FIT'>
            <form>
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
              <input type="text" />
              </div>
              <div className='p-3'>
              <label>IMAGE</label><br />
              <input type="file" />
              </div>
              <div className='p-3'>
              <label>G-MAIL:</label><br />
              <input type="text" />
              </div>          
              <div className='p-3'>
              <label>PHONE NO:</label><br />
              <input type="text" />
              </div>
              <div className='p-3'>
              <label>ADDRESS:</label><br />
              <input type="text" />
              </div>
                           
          <div>
            <button className='p-3 justify-center bg-red-700'>SUBMIT</button>
          </div>
          </form>
          </div>
          
        </div>
      </div>
    </div>
        </>
  )
}

