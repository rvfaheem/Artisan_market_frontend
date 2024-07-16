import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import image from './Org.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export const Accept_or_reject = () => {
    let id = localStorage.getItem('id');
    const [nav1, setNav1] = useState(true);
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Adjust this based on your preference
    const [searchCategory, setSearchCategory] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/organiser/viewexihibitionartist/${id}`)
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [refresh]);

    let handleSubmit =  (statuss, id) => {
      console.log(id);
      try {
        const response =  axios.put(`http://localhost:4000/organiser/manageexhibitionartist/${id}`, { status: statuss });
        console.log(response);
        setRefresh(!refresh);
        setData([]);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    let toggle1 = () => {
        setNav1(!nav1);
    };

    let toggleFalse = () => {
        setNav1(false);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const filteredData = data.filter((item) =>
        item.category && item.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <ToastContainer />
            <div className='bg-orange-300 w-screen h-fit m-4 p-4'>
                <div className='relative overflow-x-auto'>
                    <div className='flex gap-4'>
                        <input
                            type='text'
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                            placeholder='Search by Category'
                            className='p-2 rounded-md border border-gray-300'
                        />
                    </div>

                    <table className='w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    S.L No
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Name
                                </th>
                                {/* <th scope='col' className='px-6 py-3'>
                                    Exihibition Name
                                </th> */}
                                <th scope='col' className='px-6 py-3'>
                                    Product Name
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
                                <th>
                                    Status
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((artist, index) => (
                                <tr key={artist.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black'>
                                    <td className='px-6 py-4'>{index}</td>
                                    <td className='px-6 py-4'>{artist.name}</td>
                                    {/* <td className='px-6 py-4'>{artist.exhibition?.exihibitionName}</td> */}
                                    <td className='px-6 py-4'>{artist.productName}</td>
                                    <td className='px-6 py-4'>{artist.category}</td>
                                    <td className='px-6 py-4'>{artist.email}</td>
                                    <td class="px-6 py-4 text-blue-600" className='px-6 py-4'>
                                        <a target='_blank' download href={`http://localhost:4000/uploads/${artist.image}`}>
                                            <button className='bg-blue-950 text-white p-2 rounded-2xl'>Download</button>
                                        </a>
                                    </td>
                                    <td className='px-6 py-4'>{artist.phoneNumber}</td>
                                    <td className='px-6 py-4'>{artist.Address}</td>
                                    <td className='px-6 py-4'>{artist.status}</td>
                                    <td>
                                        <button type='submit' onClick={() => { handleSubmit('accept', artist._id) }} className='bg-[#3BD45C] w-[50%] text-white pr-5 pt-3 pb-3 rounded-xl '>Accept</button>
                                    </td>
                                    <td>
                                        <button type='submit' onClick={() => { handleSubmit('reject', artist._id) }} className='bg-[#DC3838] w-[50%] text-white pr-5 pt-3 pb-3 rounded-xl '>Reject</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='flex justify-center mt-5'>
                        <ReactPaginate
                            pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={10}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            activeClassName='active'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
