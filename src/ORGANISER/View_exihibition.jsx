import React, { useEffect, useState } from 'react';
import image from './artist.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const View_exihibition = () => {
    let id = localStorage.getItem('id');
    console.log(id);

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://artisan-market-backend.onrender.com/organiser/viewexihibitions/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchData();
    }, [refresh]);

    let handleDelete = async (id) => {
        let response = await axios.delete(`https://artisan-market-backend.onrender.com/organiser/deleteproduct/${id}`);
        console.log(response);
        setRefresh(!refresh);
    };

    const [nav1, setNav1] = useState(true);

    let Toggle1 = () => {
        setNav1(!nav1);
    };
    let ToggleTrue1 = () => {
        setNav1(true);
    };
    let ToggleFalse = () => {
        setNav1(false);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.exihibitionName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div>
                <div className="organise m-4 p-4">
                    <input
                        type="text"
                        placeholder="Search by exhibition name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className="border border-gray-300 rounded-md py-2 px-4"
                    />

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">S.L No</th>
                                    <th scope="col" className="px-6 py-3">Exhibition</th>
                                    <th scope="col" className="px-6 py-3">Image</th>
                                    <th>Sponsors</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Description</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black" key={index}>
                                        <td className="px-6 py-4">{index}</td>
                                        <td className="px-6 py-4">{item.exihibitionName}</td>
                                        <td className="px-6 py-4">
                                            <img src={`https://artisan-market-backend.onrender.com/uploads/${item.image}`} onMouseLeave={ToggleFalse} onMouseEnter={Toggle1} className="w-8 h-8" alt="" />
                                        </td>
                                        <td className="px-6 py-4">{item.sponcers}</td>
                                        <td className="px-6 py-4">
                                            {new Date(item.startdate).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(item.enddate).toLocaleDateString()}
                                        </td>
                                        <td className="max-h-20 overflow-y-auto border border-gray-300 p-2 rounded">{item.description}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex pt-2 pb-2 gap-3">
                                                <Link to={`/organiser/updateexihibition/${item._id}`}>
                                                    <button className="bg-[#3BD45C] w-20 text-white pt-3 pb-3 rounded-xl">Update</button>
                                                </Link>
                                                <button onClick={() => handleDelete(item._id)} className="bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};



