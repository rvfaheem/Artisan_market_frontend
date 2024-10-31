import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import image from './box.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Assign_delivery = () => {
  let { id } = useParams();
  const [nav1, setNav1] = useState(true);
  const [data, setData] = useState(['']);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [districtFilter, setDistrictFilter] = useState('');
  const [postFilter, setPostFilter] = useState('');
  
  const navigate=useNavigate()

  const itemsPerPage = 5; // Adjust this based on your preference

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`https://artisan-market-backend.onrender.com/admin/viewuserdelivery`);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  let handleSubmit =  (statuss, deliveryid) => {
    setRefresh(!refresh);
    console.log(id);
    let response =  axios.put(`https://artisan-market-backend.onrender.com/artist/manageDelivery/${id}`, {
      status: 'assigned',
      deliveryId: deliveryid,
    });
    console.log(response);
    toast.success('Assigned')
    
    // navigate('/artist')
    setTimeout(() => navigate('/artist'), 3000); // Delay navigate
    setData('');
  };

  let toggle1 = () => {
    setNav1(!nav1);
  };

  let toggleFalse = () => {
    setNav1(false);
  };

  // Filter data based on district
  const filteredData = data.filter((delivery) =>
    delivery.district ? delivery.district.toLowerCase().includes(districtFilter.toLowerCase()) : true
  );

  // Filter data based on post
  const postFilteredData = filteredData.filter((delivery) =>
    delivery.post ? delivery.post.toLowerCase().includes(postFilter.toLowerCase()) : true
  );

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postFilteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
    <ToastContainer/>
      <div className='bg-orange-300 w-screen h-fit m-4 p-4'>
        <div className='relative overflow-x-auto'>
          {/* Add district search input */}
          <input
            type='text'
            placeholder='Search by District...'
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className='m-2 px-3 py-1 border border-gray-300 rounded-md'
          />

          {/* Add post search input */}
          <input
            type='text'
            placeholder='Search by Post...'
            value={postFilter}
            onChange={(e) => setPostFilter(e.target.value)}
            className='m-2 px-3 py-1 border border-gray-300 rounded-md'
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
                  E-mail
                </th>
                <th scope='col' className='px-6 py-3'>
                  Phone No
                </th>
                <th scope='col' className='px-6 py-3'>
                  Address
                </th>
                <th scope='col' className='px-6 py-3'>
                  Post
                </th>
                <th scope='col' className='px-6 py-3'>
                  District
                </th>
                {/* <th scope='col' className='px-6 py-3'>
                  Status
                </th> */}
                <th></th>
                <th></th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {currentItems.map((delivery) => (
                <tr key={delivery.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black'>
                  <td className='px-6 py-4'>{delivery.id}</td>
                  <td className='px-6 py-4'>{delivery.name}</td>
                  <td className='px-6 py-4'>
                  <a href={`https://artisan-market-backend.onrender.com/uploads/${delivery.image}`} target='_blank'> <img src={`https://artisan-market-backend.onrender.com/uploads/${delivery.image}`}onMouseLeave={toggleFalse} onMouseEnter={toggle1} className='w-8 h-8' alt='' />
                  </a></td>
                  <td className='px-6 py-4'>{delivery.gmail}</td>
                  <td className='px-6 py-4'>{delivery.phoneNumber}</td>
                  <td className='px-6 py-4'>{delivery.Address}</td>
                  <td className='px-6 py-4'>{delivery.post}</td>
                  <td className='px-6 py-4'>{delivery.district}</td>
                  {/* <td className='px-6 py-4'>{delivery.status}</td> */}
                  <td>
                    <button type='submit' onClick={() => { handleSubmit('assigned', delivery._id) }} className='bg-[#3BD45C] w-11 text-white pt-3 pb-3 rounded-xl'>Assign</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className='flex justify-center mt-5'>
            <ReactPaginate
              pageCount={Math.ceil(postFilteredData.length / itemsPerPage)}
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
      {/* {nav1 && (
        <div className='absolute sm:left-[50%] top-28 z-10'>
          <img src={image} className='w-96 rounded-[50%] z-[10] h-96' alt='' />
        </div>
      )} */}
    </>
  );
};
