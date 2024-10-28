import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import image from './Artist.jpg';
import axios from 'axios';

export const Delivery = () => {
  const [nav1, setNav1] = useState(false); // Initialize to false
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5; // Adjust this based on your preference

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`https://artisan-market-backend.onrender.com/admin/viewuserdelivery`);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, [refresh]);

  let handleSubmit = async (statuss, id) => {
    setRefresh(!refresh);
    console.log(id);
    let response = await axios.put(`https://artisan-market-backend.onrender.com/admin/manageUser/${id}`, { status: statuss });
    console.log(response);
    setData([]);
  };

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Filter data based on search term
  const filteredData = data.filter((delivery) =>
    delivery.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle mouse enter on the image
  const handleMouseEnter = () => {
    setNav1(true);
  };

  // Function to handle mouse leave from the image
  const handleMouseLeave = () => {
    setNav1(false);
  };

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
                  ID-PROOF
                </th>
                <th scope='col' className='px-6 py-3'>
                  EXPERIENCE
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
              {currentItems.map((delivery,index) => (
                <tr key={delivery.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black'>
                  {/* <td className='px-6 py-4'>{delivery.id}</td> */}
                  <td class="px-6 py-4">{index}</td>
                  <td className='px-6 py-4'>{delivery.name}</td>
                  <td className='px-6 py-4'>
                    <img
                      src={`https://artisan-market-backend.onrender.com/uploads/${delivery.image}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className='w-8 h-8'
                      alt=''
                    />
                  </td>
                  <td class="px-6 py-4 text-blue-600" className='px-6 py-4'><a  target='_blank' download href={`https://artisan-market-backend.onrender.com/uploads/${delivery.idproof}`}><button className='bg-blue-950 text-white p-2 rounded-2xl'>Download</button></a></td>
                  <td class="px-6 py-4 text-blue-600" className='px-6 py-4'><a  target='_blank' download href={`https://artisan-market-backend.onrender.com/uploads/${delivery.Experience}`}><button className='bg-blue-950 text-white p-2 rounded-2xl'>Download</button></a></td>
                  <td className='px-6 py-4'>{delivery.gmail}</td>
                  <td className='px-6 py-4'>{delivery.phoneNumber}</td>
                  <td className='px-6 py-4'>{delivery.Address}</td>
                  <td className='px-6 py-4'>{delivery.status}</td>
                  <td>
                    <button type='submit' onClick={()=>{handleSubmit('accept',delivery._id)}} className='bg-[#3BD45C] w-24 text-white pt-3 pb-3 rounded-xl '>Accept</button>
                  </td>
                  <td>
                    <button type='submit' onClick={()=>{handleSubmit('reject',delivery._id)}} className='bg-[#DC3838] w-24 text-white pt-3 pb-3 rounded-xl '>Reject</button>
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

