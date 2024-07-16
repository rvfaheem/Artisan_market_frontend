import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from './bttle.jpg';
import axios from 'axios';

export const View_orders = () => {
    let id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://artisan-market-backend.onrender.com/artist/viewproductorder/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter data based on search term
    const filteredData = data.filter((item) =>
        item.product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="organise m-4 p-4">
                <div className="relative overflow-x-auto">
                    <input
                        type="text"
                        placeholder="Search by product name..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-md p-2 mb-4"
                    />
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    S.L No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub-Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Feedback
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr className="bg-white  text-black border-b dark:bg-gray-800 dark:border-gray-700 text-black" key={index}>
                                    <td className="px-6 py-4 ">{index + 1}</td>
                                    <td className="px-6 py-4">{item.orders.date}</td>
                                    <td className="px-6 py-4">{item.users.name}</td>
                                    <td className="px-6 py-4">{item.product.productName}</td>
                                    <td className="px-6 py-4">{item.product.price}</td>
                                    <td className="px-6 py-4">{item.categories.category}</td>
                                    <td className="px-6 py-4">{item.sub_categories.sub_category}</td>
                                    <td className="px-6 py-4">{item.orders.feedback}</td>
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4"></td>
                                    <td className="flex pt-2 pb-2 gap-3">
                                        <Link to={`/artist/assign_delivery/${item.orders._id}`}>
                                            <button className="bg-[#3BD45C] w-[100%] text-white pt-4 pb-4 rounded-xl ">
                                                Assign Delivery Boy
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
