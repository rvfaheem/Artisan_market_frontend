import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import image from './Artist.jpg';
import axios from 'axios';

export const Artist = () => {
  const [nav1, setNav1] = useState(false); // Initially false to hide image
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5; // Adjust this based on your preference

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/admin/viewuserartist`);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, [refresh]);

  let handleSubmit =  (statuss, id) => {
    console.log(id);
    let response =  axios.put(`http://localhost:4000/admin/manageUser/${id}`, { status: statuss });
    setRefresh(!refresh);
    console.log(response);
    setData([]);
  };

  let toggleImage = () => {
    setNav1(!nav1);
  };

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Filter data based on search term
  const filteredData = data.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className='bg-orange-300 w-screen h-fit m-4 p-4'>
        <div className='relative overflow-x-auto'>
          {/* Search input */}
          <input
            type='text'
            className='border border-gray-300 p-2 mb-4 rounded-md'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

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
                  ART-WORK
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  E-mail
                </th>                
                <th scope='col' className='px-6 py-3'>
                  Phone No
                </th>
                <th scope='col' className='px-6 py-3'>
                  Address
                </th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {currentItems.map((artist,index) => (
                <tr key={artist.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td class="px-6 py-4">{index}</td>
                  {/* <td className='px-6 py-4'>{artist.id}</td> */}
                  <td className='px-6 py-4'>{artist.name}</td>
                  <td className='px-6 py-4 text-center'>
                    <img src={`http://localhost:4000/uploads/${artist.image}`} onMouseEnter={toggleImage} onMouseLeave={toggleImage} className='w-8 h-8' alt='' />
                  </td>
                  <td class="px-6 py-4 text-blue-600" className='px-6 py-4'><a  target='_blank' download href={`http://localhost:4000/uploads/${artist.artwork}`}><button className='bg-blue-950 text-white p-2 rounded-2xl'>Download</button></a></td>
                  {/* <td className='px-6 py-4'>{artist.artwork}</td> */}
                  <td className='px-6 py-4'>{artist.category}</td>
                  <td className='px-6 py-4'>{artist.gmail}</td>
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
              pageCount={Math.ceil(filteredData.length / itemsPerPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
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
