import React, { useEffect, useState } from 'react'
import image from './exhi2.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Offline_exihibition = () => {
  let {id}=useParams()
  // let userid=localStorage.getItem('id')

  const [data, setdata]=useState([''])

  useEffect(() =>{
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/artist/viewofflineexihibition/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])


  return (

    
    <div>

          <div class='flex p-7'>

<div>
  <img className='w-fit h-screen'src={`http://localhost:4000/uploads/${data?.image}`} alt=''/>
</div>
<div className='text-[50px] '>
           {data.exihibitionName}

</div>
<div className='flex'>
  <div>02-03-2024</div>
<div>03-03-2024</div>
</div>
</div>
<div>

<p className='p-8 text-[30px]'>{data?.exihibitionName}
An exhibition, in the most general sense, is an organized presentation and display of a selection of items. In practice, exhibitions usually occur within a cultural or educational setting such as a museum, art gallery, park, library, exhibition hall, or World's fairs. Exhibitions can include many things such as art in both major museums and smaller galleries, interpretive exhibitions, natural history museums and history museums, and also varieties such as more commercially focused exhibitions and trade fairs. They can also foster community engagement, dialogue, and education, providing visitors with opportunities to explore diverse perspectives, historical contexts, and contemporary issues. Additionally, exhibitions frequently contribute to the promotion of artists, innovators, and industries, acting as a conduit for the exchange of ideas and the celebration of human creativity and achievement.
</p>
</div>
    </div>
  )
}
