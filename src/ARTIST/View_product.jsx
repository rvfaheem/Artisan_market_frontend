import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'

export const View_product = () => {
    let id = localStorage.getItem('id');

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [searchProduct, setSearchProduct] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/artist/Viewaddedproducts/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchData();
    }, [refresh]);

    let handleDelete =  (id) => {
        let response = axios.delete(`http://localhost:4000/artist/deleteproduct/${id}`);
        console.log(response);
        setRefresh(!refresh);
        toast.warning('Deleted')
        
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

    const filterData = () => {
        return data.filter((item) => {
            const productName = item.product.productName.toLowerCase();
            return productName.includes(searchProduct.toLowerCase());
        });
    };

    return (
        <>
        <ToastContainer/>
        <div>
            
            <div>
                <div class='organise m-4 p-4'>
                    <form>
                        <input type="text" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} placeholder="Search Product" />
                    </form>
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
                                    Product
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Sub-Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData().map((item, index) => (
                                <tr key={item.product._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                                    <td class="px-6 py-4">{index}</td>
                                    {/* <td class="px-6 py-4">03-02-2024</td> */}
                                    <td class="px-6 py-4">{item.product.productName}</td>
                                    <td class="px-6 py-4">{item.category?.category}</td>
                                    <td class="px-6 py-4">{item.subcategory.sub_category}</td>
                                    <td class="px-6 py-4">
                                    <a href={`http://localhost:4000/uploads/${item.product.Image}`} target='_blank'> <img src={`http://localhost:4000/uploads/${item.product.Image}`} onMouseLeave={ToggleFalse} onMouseEnter={Toggle1} className="w-8 h-8" alt="" />
                                    </a></td>
                                    <td class="px-6 py-4">requested</td>
                                    <td>
                                        <div className='flex pt-2 pb-2 gap-3'>
                                            <Link to={`/artist/product_update/${item.product._id}`}>
                                                <button className='bg-[#3BD45C] w-[100%] text-white pt-3 pb-3 rounded-xl'>Update</button>
                                            </Link>
                                            <button onClick={() => handleDelete(item.product._id)} className='bg-[#DC3838] w-[50%] text-white pt-3 pb-3 rounded-xl'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* {nav1 && (
                <div className='absolute sm:left-[30%] z-10'>
                    {data.map((item) => (
                        <img src={`http://localhost:4000/uploads/${item.product.Image}`} className="w-96 rounded-[50%]   z-[10] h-96" alt="" />
                    ))}
                </div>
            )} */}
        </div>
        </>
    );
};

