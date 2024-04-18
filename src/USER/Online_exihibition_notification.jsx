import React, { useEffect, useState } from 'react'
import image from './exhi2.jpg'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export const Online_exihibition_notification = () => {
  let {id}=useParams()
  
  const [data,setdata]=useState([''])

  useEffect(()=>{
    let fetchData=async () =>{
      let response=await axios.get(`http://localhost:4000/user/viewonlineexihibitiondetailsuser/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])

  const isOngoing = () => {
    const currentDate = new Date();
    const startDate = new Date(data?.startdate);
    const endDate = new Date(data?.enddate);
console.log(currentDate >= startDate && currentDate <= endDate);
    return currentDate >= startDate && currentDate <= endDate
      
    
  }


  return (
    <div>
      {data && (
        <>
          <div className='flex p-7'>
            <div>
              <img className='w-fit h-screen' src={`http://localhost:4000/uploads/${data.image}`} alt='' />
            </div>
            <div className='text-[50px] '>
              {data?.exihibitionName}
              {data.sponcers}
              {data.description}
            </div>
            <div className='flex'>
              <div>02-03-2024</div>
              <div>03-03-2024</div>
            </div>
          </div>

          {isOngoing() && (
            <div>
              <Link to={`/user/exihibition/${data._id}`} className="inline-flex items-center px-6 py-4 text-sm font-medium p-14 m-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Exhibition Products
              </Link>
            </div>
          )}

          <div>
            <p className='p-8 text-[30px]'>
              An exhibition, in the most general sense, is an organized presentation and display of a selection of items. In practice, exhibitions usually occur within a cultural or educational setting such as a museum, art gallery, park, library, exhibition hall, or World's fairs. Exhibitions can include many things such as art in both major museums and smaller galleries, interpretive exhibitions, natural history museums and history museums, and also varieties such as more commercially focused exhibitions and trade fairs. They can also foster community engagement, dialogue, and education, providing visitors with opportunities to explore diverse perspectives, historical contexts, and contemporary issues. Additionally, exhibitions frequently contribute to the promotion of artists, innovators, and industries, acting as a conduit for the exchange of ideas and the celebration of human creativity and achievement.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
