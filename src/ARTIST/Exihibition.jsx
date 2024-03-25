import React from 'react'
import image from './exhi2.jpg'

export const A_Exihibition = () => {
  return (
    <>
    <div>
      <div className='bg-orange-500 w-screen h-screen opacity-75 '>
        <div className='flex'>
        <div>
          <img className='w-11/12 h-96 p-3' src={image} alt="" />

        </div>
        <div className='bg-gray-500 w-6/12 h-96 p-11 m-2'>
          <div className='bg-neutral-600'>FROM DATE:02-03-30
         
          </div>
          <div className='bg-neutral-600'>
          TO DATE:03-03-30
          </div>
          <p className='p-8 text-[15px]'>
      An exhibition, in the most general sense, is an organized presentation and display of a selection of items. In practice, exhibitions usually occur within a cultural or educational setting such as a museum, art gallery, park, library, exhibition hall, or World's fairs. Exhibitions can include many things such as art in both major museums and smaller galleries, interpretive exhibitions, natural history museums and history museums, and also varieties such as more commercially focused exhibitions and trade fairs. They can also foster community engagement, dialogue, and education, providing visitors with opportunities to explore diverse perspectives, historical contexts, and contemporary issues. Additionally, exhibitions frequently contribute to the promotion of artists, innovators, and industries, acting as a conduit for the exchange of ideas and the celebration of human creativity and achievement.
      </p>
          </div>
          <div>

          </div>
          <div>
            
      

      </div>
      

          
        </div>
        <a href="/artist/exihibition_register" class="inline-flex items-center px-6 py-4 text-sm font-medium p-14 m-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register-requist</a>
      </div>


    </div>
 
    </>



      

    
  )
}
