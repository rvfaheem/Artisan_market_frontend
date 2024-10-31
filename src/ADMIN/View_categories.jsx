import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export const View_categories = () => {
    const [data, setData] = useState([]);
    const [updatedata, setUpdateData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artisan-market-backend.onrender.com/admin/viewsubcategory');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleEditCategory = async (cid) => {
        try {
            await axios.put(`https://artisan-market-backend.onrender.com/admin/editcategory/${cid}`, updatedata);
            toast.success('Category edited successfully');
        } catch (error) {
            console.error('Error editing category:', error);
            toast.error('Failed to edit category');
        }
    };

    const handleEditSubcategory = async (sid) => {
        try {
            await axios.put(`https://artisan-market-backend.onrender.com/admin/editsubcategory/${sid}`, updatedata);
            toast.success('Subcategory edited successfully');
        } catch (error) {
            console.error('Error editing subcategory:', error);
            toast.error('Failed to edit subcategory');
        }
    };

    const handleDeleteCategory = async (cid) => {
        try {
            await axios.delete(`https://artisan-market-backend.onrender.com/admin/deletecategory/${cid}`);
            toast.success('Category deleted successfully');
            setData(data.filter(item => item.category._id !== cid));
        } catch (error) {
            console.error('Error deleting category:', error);
            toast.error('Failed to delete category');
        }
    };

    const handleDeleteSubcategory = async (sid) => {
        try {
            await axios.delete(`https://artisan-market-backend.onrender.com/admin/deletesubcategory/${sid}`);
            toast.success('Subcategory deleted successfully');
            setData(data.map(item => ({
                ...item,
                subcategories: item.subcategories?.filter(sub => sub._id !== sid)
            })));
        } catch (error) {
            console.error('Error deleting subcategory:', error);
            toast.error('Failed to delete subcategory');
        }
    };

    const handleChange = (event) => {
        setUpdateData({ ...updatedata, [event.target.name]: event.target.value });
    };

    return (
        <>
            <ToastContainer />
            <div className="organise m-4 p-4">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-4">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">S.L No</th>
                                <th className="px-6 py-3">Category And Sub_Categories</th>
                                
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <React.Fragment key={item.category._id}>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="text"
                                                placeholder={item.category.category}
                                                onChange={handleChange}
                                                className="text-black border border-gray-300 rounded-md p-2 mb-4 w-full"
                                                name="category"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => handleEditCategory(item.category._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDeleteCategory(item.category._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    {item.subcategories?.map((sub, subIndex) => (
                                        <tr key={sub._id} className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                            <td className="px-6 py-4">{`${index + 1}.${subIndex + 1}`}</td>
                                            <td className="px-6 py-4 pl-10">
                                                <input
                                                    type="text"
                                                    placeholder={sub.sub_category}
                                                    onChange={handleChange}
                                                    className="text-black border border-gray-300 rounded-md p-2 mb-4 w-full"
                                                    name="sub_category"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => handleEditSubcategory(sub._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDeleteSubcategory(sub._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};















// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify'


// export const View_categories = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://artisan-market-backend.onrender.com/admin/viewsubcategory`);
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     const handleEditCategory = async (cid) => {
//         try {
//             const response = await axios.put(`https://artisan-market-backend.onrender.com/admin/editcategory/${cid}`, updatedata);
//             console.log(response);
//             toast.success('Edited Category')
//             // You may want to update the UI or show a success message here
//         } catch (error) {
//             console.error('Error editing category:', error);
//         }
//     };

//     const handleEditSubcategory = async (sid) => {
//         try {
//             const response = await axios.put(`https://artisan-market-backend.onrender.com/admin/editsubcategory/${sid}`, updatedata);
//             console.log(response);
//             toast.success('Edited Subcategory')
//             // You may want to update the UI or show a success message here
//         } catch (error) {
//             console.error('Error editing subcategory:', error);
//         }
//     };

//     const [updatedata,setupdateData]=useState('')

//     const   handleChange = (event) => {
//         setupdateData({...updatedata,[event.target.name]:event.target.value})
     
//     };

//     return (
//         <>
//         <ToastContainer/>
//             <div className='organise m-4 p-4'>
//                 <div className="relative overflow-x-auto">
//                     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
//                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                             <tr>
//                                 <th scope="col" className="px-6 py-3">
//                                     S.L No
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     CATEGORIES
//                                 </th>
//                                 <th scope="col" className="px-6 py-3">
//                                     SUB CATEGORIES
//                                 </th>
//                                 <th>

//                                 </th>
//                                 <th>

//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((item, index) => (
//                                 <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                     <td className="px-6 py-4">
//                                         {index + 1}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         <input
//                                             type="text"
//                                             placeholder={item.subcategory?.category}
//                                             onChange={handleChange}
//                                             className="text-black border border-gray-300 rounded-md p-2 mb-4 w-full"
//                                             name='category'
//                                         />
//                                     </td>
//                                     <td>
//                                         <button onClick={()=>handleEditCategory(item.subcategory?._id    )} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//                                             Edit
//                                         </button>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         <input
//                                             type="text"
//                                             placeholder={item.category?.sub_category}
//                                             onChange={handleChange}
//                                             name='sub_category'
//                                             className="text-black border border-gray-300 rounded-md p-2 mb-4 w-full"
//                                         />
//                                     </td>
//                                     <td>
//                                     <button onClick={()=>handleEditSubcategory(item.category?._id)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//                                             Edit
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// };
