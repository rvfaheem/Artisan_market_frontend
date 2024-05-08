import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Products = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/viewproduct');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter data based on search term
    const filteredData = data.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-8 text-center">PRODUCTS</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <div className="flex sm:gap-4 flex-wrap justify-evenly">
                {filteredData.map((item) => (
                    <div
                        key={item._id}
                        className="container p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                    >
                        <img
                            className="rounded-xl w-96 h-72"
                            src={`http://localhost:4000/uploads/${item.Image}`}
                            alt=""
                        />
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="mt-5 text-2xl font-semibold">{item.productName}</h2>
                                
                                <p className="mt-2">{item.price}</p>
                                <p className="mt-2">{item?.sub_category?.sub_category}</p>
                            </div>
                            <div>
                                <Link to={`/user/product_details/${item._id}`}>
                                    <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
