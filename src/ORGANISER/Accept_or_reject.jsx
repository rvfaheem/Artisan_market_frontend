import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import image from './Org.jpg'
import axios from 'axios';

export const Accept_or_reject = () => {
    const [nav1, setNav1] = useState(true);
    const[data,setdata]=useState([''])
    const[refresh,setrefresh]=useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Adjust this based on your preference
  
  
    useEffect(()=>{
      let fetchData=async()=>{
        let response=await axios.get(`http://localhost:4000/organiser/viewexihibitionartist`)
        console.log(response.data)
        setdata(response.data)
      }
      fetchData()
    },[])
  
    let handleSubmit=async(statuss,id)=>{
      setrefresh(!refresh)
      console.log(id);
      let response=await axios.put(`http://localhost:4000/organiser/manageexhibitionartist/${id}`,{status:statuss})
      console.log(response)
      setdata('')
    }
  
    let toggle1 = () => {
      setNav1(!nav1);
    };
  
    let toggleFalse = () => {
      setNav1(false);
    };
  
    // Your application data
    const applications = [
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },
      {
        id: 1,
        name: 'Pranav',
        image,
        category:"painting",
        id_proof:'Download',
        email: 'Pranav@gmail.com',
        art_work:'download',
        phone: '254675654',
        address: 'Address',
      },                    
      // Add more application objects here
    ];
  
    // Calculate index of the first and last item to be displayed
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    // Function to handle page change
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    return (
      <>
        <div className='bg-orange-300 w-screen h-fit m-4 p-4'>
          <div className='relative overflow-x-auto'>
            <div className='flex gap-4'>
              <label className='bg-white gap-4'>From Date</label>
              <input type='date' />
              <label className='bg-white gap-4'>To Date</label>
              <input type='date' />
              <input type='text' />
              
              <button>Search</button>
            </div>
  
            <table className='w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4'>
              {/* Table Header */}
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    S.L No
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Image
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    E-mail
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    ART-WORK
                  </th>                
                  <th scope='col' className='px-6 py-3'>
                    Phone No
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Address
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {currentItems.map((artist) => (
                  <tr key={artist.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='px-6 py-4'>{artist.id}</td>
                    <td className='px-6 py-4'>{artist.name}</td>
                    <td className='px-6 py-4'>
                      <img src={artist.image} onMouseLeave={toggleFalse} onMouseEnter={toggle1} className='w-8 h-8' alt='' />
                    </td>
                    <a download href=""><td class="px-6 py-4 text-blue-600" className='px-6 py-4'>{artist.category}</td></a>
                    <td className='px-6 py-4'>{artist.gmail}</td>
                    <td className='px-6 py-4'>{artist.art_work}</td>
                    <td className='px-6 py-4'>{artist.phoneNumber}</td>
                    <td className='px-6 py-4'>{artist.Address}</td>
                    <td className='px-6 py-4'>{artist.status}</td>
                    <td>
                      <button type='submit' onClick={()=>{handleSubmit('accept',artist._id)}} className='bg-[#3BD45C] w-[50%] text-white pt-3 pb-3 rounded-xl '>Accept</button>
                    </td>
                    <td>
                      <button type='submit' onClick={()=>{handleSubmit('reject',artist._id)}} className='bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl '>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Pagination */}
            <div className='flex justify-center mt-5'>
              <ReactPaginate
                pageCount={Math.ceil(applications.length / itemsPerPage)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={10}
                onPageChange={handlePageChange}
                containerClassName='pagination'
                activeClassName='active'
              />
            </div>
  
            {/* Display image on hover */}
          
          </div>
        </div>
        {nav1 && (
              <div className='absolute sm:left-[50%] top-28 z-10'>
                <img src={image} className='w-96 rounded-[50%] z-[10] h-96' alt='' />
              </div>
            )}
      </>
    );
  };
  
  // export default artist;