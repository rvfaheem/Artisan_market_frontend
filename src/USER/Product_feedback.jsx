import React from 'react'

export const Product_feedback = () => {
  return (
    <div className='bg-indigo-500 w-screen h-screen flex justify-center p-16'>
        <div className='bg-zinc-400 h-72 w-96 '>
            <div className='flex gap-2'>
                <div>
                    <label>Feedback to Artist</label>
                </div>
                <div>
                <textarea className='w-56 h-40' type="" placeholder='feedback' />
                </div>

            </div>
            <div className='ml-60'>
               <button className='bg-red-700 w-fit h-fit p-3 rounded'>Send</button> 
            </div>
        </div>
    </div>
  )
}
