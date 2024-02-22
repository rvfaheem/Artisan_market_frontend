import React from 'react'
import image from './artist.jpg'
import image1 from './mona-lisa.jpg'
import image2 from './flower.jpg'
import image3 from './box.jpg'
import image4 from './bttle.jpg'

export const UserHome = () => {
  return (
<>
    <div className='flex'>
        <div>
        <img className='w-screen h-screen' src={image} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image1} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image2} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image3} alt=''/>
        </div>
        <div>
        <img className='w-screen h-screen' src={image4} alt=''/>
        </div>
        
    </div><br />
    <div className='flex'>
    <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value=""
          onclick="this.setAttribute('value', this.value);"
          class="pt-3 pb-2 block w-16 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value="" selected disabled hidden></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Category</label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>
    <button className=' rounded p-4 bg-lime-500'>Search</button>
    </div>
    <div>
        <div>PAINTING</div><br />
        <div className='flex gap-6'>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>            
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-2/12'><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='bg-lime-600 h-5 w-28 p-8 rounded'>MORE</button>
            </div>
        </div>
        
    </div>
    <div>
        <div>DRAWING</div><br />
        <div className='flex gap-6'>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>            
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-2/12'><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='bg-lime-600 h-5 w-28 p-8 rounded'>MORE</button>
            </div>
        </div>
        
    </div>
    <div>
        <div>PAINTING</div><br />
        <div className='flex gap-6'>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>            
            <div className='w-3/12'>
                <img src={image4} alt="" />
                <label>Painting 1</label>
            </div>
            <div className='w-2/12'><br /><br /><br /><br /><br /><br /><br /><br />
                <button className='bg-lime-600 h-5 w-28 p-8 rounded'>MORE</button>
            </div>
        </div>
        
    </div>        
    






            

        

    
    </>
  )
}
