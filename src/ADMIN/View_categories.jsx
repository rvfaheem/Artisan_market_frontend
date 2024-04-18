import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const View_categories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/admin/viewsubcategory`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleEditCategory = async (cid) => {
        try {
            const response = await axios.put(`http://localhost:4000/admin/editcategory/${cid}`, updatedata);
            console.log(response);
            // You may want to update the UI or show a success message here
        } catch (error) {
            console.error('Error editing category:', error);
        }
    };

    const handleEditSubcategory = async (sid) => {
        try {
            const response = await axios.put(`http://localhost:4000/admin/editsubcategory/${sid}`, updatedata);
            console.log(response);
            // You may want to update the UI or show a success message here
        } catch (error) {
            console.error('Error editing subcategory:', error);
        }
    };

    const [updatedata,setupdateData]=useState('')

    const   handleChange = (event) => {
        setupdateData({...updatedata,[event.target.name]:event.target.value})
     
    };

    return (
        <>
            <div className='organise m-4 p-4'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    S.L No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CATEGORIES
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    SUB CATEGORIES
                                </th>
                                <th>

                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            placeholder={item.subcategory?.category}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                                            name='category'
                                        />
                                    </td>
                                    <td>
                                        <button onClick={()=>handleEditCategory(item.subcategory?._id    )} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            placeholder={item.category?.sub_category}
                                            onChange={handleChange}
                                            name='sub_category'
                                            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                                        />
                                    </td>
                                    <td>
                                    <button onClick={()=>handleEditSubcategory(item.category?._id)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                            Edit
                                        </button>
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
