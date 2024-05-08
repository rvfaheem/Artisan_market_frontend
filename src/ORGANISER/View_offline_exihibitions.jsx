import React, { useEffect, useState } from 'react';
import image from './artist.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const View_offline_exihibitions = () => {
    let id = localStorage.getItem('id');

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/organiser/viewofflineexihibitions/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchData();
    }, [refresh]);

    let handleDelete = async (id) => {
        let response = await axios.delete(`http://localhost:4000/organiser/deleteexihibition/${id}`);
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

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter data based on search query
    const filteredData = data.filter((item) =>
        item.exihibitionName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div>
                <div class='organise m-4 p-4'>
                    <input
                        type="text"
                        placeholder="Search by exhibition name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className="border border-gray-300 rounded-md py-2 px-4"
                    />

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        S.L No
                                    </th>
                                    {/* <th scope="col" class="px-6 py-3">
                                        Date
                                    </th> */}
                                    <th scope="col" class="px-6 py-3">
                                        Exhibition
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4">{index}</td>
                                        {/* <td class="px-6 py-4">03-02-2024</td> */}
                                        <td class="px-6 py-4">{item.exihibitionName}</td>
                                        <td class="px-6 py-4">
                                            <img
                                                src={`http://localhost:4000/uploads/${item.image}`}
                                                onMouseLeave={ToggleFalse}
                                                onMouseEnter={Toggle1}
                                                className="w-8 h-8"
                                                alt=""
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className="flex pt-2 pb-2 gap-3">
                                                <Link to={`/organiser/updateofflineexihibitions/${item._id}`}>
                                                    <button className="bg-[#3BD45C] w-[100%] text-white pt-3 pb-3 rounded-xl ">
                                                        Update
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl "
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* {nav1 && (
                    <div className="absolute sm:left-[30%] z-10">
                        <img src={image} className="w-96 rounded-[50%] z-[10] h-96" alt="" />
                    </div>
                )} */}
            </div>
        </>
    );
};
