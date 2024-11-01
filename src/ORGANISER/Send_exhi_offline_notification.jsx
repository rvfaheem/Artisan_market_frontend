import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const Send_exhi_offline_notification = () => {
  const [data, setData] = useState({
    exihibitionName: '',
    sponcers: '',
    image: null,
    venue: '',
    description: '',
  })
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const navigate = useNavigate()
  const currentDate = new Date().toISOString().split('T')[0]

  const handleChange = (event) => {
    const { name, value, files } = event.target
    if (name === 'image') {
      setData({ ...data, [name]: files[0] })
    } else {
      setData({ ...data, [name]: value })

      // Update start and end dates separately to validate dynamically
      if (name === 'startingdate') setStartDate(value)
      if (name === 'endingdate') setEndDate(value)
    }
  }

  let id = localStorage.getItem('id')
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (startDate && endDate && startDate > endDate) {
      toast.error('End date cannot be before start date.')
      return
    }

    const formData = new FormData()
    formData.append("exihibitionName", data.exihibitionName)
    formData.append("sponcers", data.sponcers)
    formData.append("image", data.image)
    formData.append("venue", data.venue)
    formData.append("description", data.description)
    formData.append("startingdate", startDate)
    formData.append("endingdate", endDate)
    formData.append("organiserId", id)

    try {
      let response = await axios.post(`https://artisan-market-backend.onrender.com/organiser/Sendoffline`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)
      toast.success('Sent Exhibition offline notification')
      navigate('/organiser/viewofflineexihibitions')
    } catch (error) {
      console.error(error)
      toast.error('Failed to send notification')
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="organise min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Send Offline Exhibition</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                onChange={handleChange}
                name="exihibitionName"
                placeholder="Exhibition Name"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                onChange={handleChange}
                name="sponcers"
                placeholder="Sponsors"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="venue"
                onChange={handleChange}
                placeholder="Venue"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
              Upload Image
            </label>
            <input
              name="image"
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              type="file"
            />
            <div className="relative z-0 w-full mb-5">
              <textarea
                onChange={handleChange}
                name="description"
                placeholder="Description"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="flex flex-row space-x-4">
              <div className="relative z-0 w-full mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">Starting Date</label>
                <input
                  type="date"
                  name="startingdate"
                  min={currentDate}
                  onChange={handleChange}
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="relative z-0 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">Ending Date</label>
                <input
                  type="date"
                  name="endingdate"
                  min={startDate || currentDate} // Ensure End Date can't be before Start Date
                  onChange={handleChange}
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Send Notification to Artists and Users
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}






// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'

// export const Send_exhi_offline_notification = () => {
//   const [data, setData] = useState({
//     exihibitionName: '',
//     sponcers: '',
//     image: null,
//     venue: '',
//     description: '',
//     startingdate: '',
//     endingdate: '',
//   })

//   const navigate = useNavigate()
//   const currentDate = new Date().toISOString().split('T')[0] // Format current date for min validation

//   const handleChange = (event) => {
//     const { name, value, files } = event.target
//     setData({
//       ...data,
//       [name]: name === 'image' ? files[0] : value,
//     })

//     // Reset the ending date if starting date changes
//     if (name === 'startingdate') {
//       setData((prevData) => ({
//         ...prevData,
//         endingdate: '', // Clear end date if start date changes
//       }))
//     }
//   }

//   const id = localStorage.getItem('id')
//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const formData = new FormData()

//     // Append all form data
//     Object.keys(data).forEach((key) => {
//       formData.append(key, data[key])
//     })
//     formData.append("organiserId", id)

//     try {
//       let response = await axios.post(`https://artisan-market-backend.onrender.com/organiser/Sendoffline`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       })
//       console.log(response)
//       toast.success('Sent Exhibition Offline Notification')
//       navigate('/organiser/viewofflineexihibitions')
//     } catch (error) {
//       console.error(error)
//       toast.error('Failed to send notification')
//     }
//   }

//   return (
//     <div>
//       <ToastContainer />
//       <div className="organise min-h-screen bg-gray-100 p-0 sm:p-12">
//         <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
//           <h1 className="text-2xl font-bold mb-8">Send Offline Exhibition</h1>
//           <form onSubmit={handleSubmit}>
//             {/* Exhibition Name */}
//             <div className="relative z-0 w-full mb-5">
//               <input
//                 type="text"
//                 name="exihibitionName"
//                 placeholder="Exhibition Name"
//                 required
//                 onChange={handleChange}
//                 className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//             </div>

//             {/* Sponsors */}
//             <div className="relative z-0 w-full mb-5">
//               <input
//                 type="text"
//                 name="sponcers"
//                 placeholder="Sponsors"
//                 required
//                 onChange={handleChange}
//                 className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//             </div>

//             {/* Venue */}
//             <div className="relative z-0 w-full mb-5">
//               <input
//                 type="text"
//                 name="venue"
//                 placeholder="Venue"
//                 required
//                 onChange={handleChange}
//                 className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//             </div>

//             {/* Image Upload */}
//             <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
//               Upload Image
//             </label>
//             <input
//               name="image"
//               type="file"
//               onChange={handleChange}
//               className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
//             />

//             {/* Description */}
//             <div className="relative z-0 w-full mb-5">
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 required
//                 onChange={handleChange}
//                 className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//               />
//             </div>

//             {/* Starting Date and Ending Date */}
//             <div className="flex flex-row space-x-4">
//               {/* Starting Date */}
//               <div className="relative z-0 w-full mb-5">
//                 <label className="block mb-2 text-sm font-medium text-gray-900">
//                   Starting Date
//                 </label>
//                 <input
//                   type="date"
//                   name="startingdate"
//                   min={currentDate}
//                   required
//                   onChange={(e) => {
//                     handleChange(e)
//                     setData({ ...data, endingdate: '' }) // Clear end date if start date changes
//                   }}
//                   className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//                 />
//               </div>

//               {/* Ending Date */}
//               <div className="relative z-0 w-full">
//                 <label className="block mb-2 text-sm font-medium text-gray-900">
//                   Ending Date
//                 </label>
//                 <input
//                   type="date"
//                   name="endingdate"
//                   min={data.startingdate || currentDate} // Ensure End Date can't be before Start Date
//                   required
//                   onChange={handleChange}
//                   className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
//             >
//               Send Notification to Artists and Users
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
