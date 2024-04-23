import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const View_exihibition_register = () => {
    let id = localStorage.getItem('id');
    let { id1 } = useParams();
    const [data, setData] = useState([]);
    const [searchExhibition, setSearchExhibition] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/artist/viewexihibitionregister/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchData();
    }, []);

    const filterData = () => {
        return data.filter((item) => {
            const exhibitionName = item.exhibition?.exihibitionName?.toLowerCase();
            return exhibitionName && exhibitionName.includes(searchExhibition.toLowerCase());
        });
    };

    return (
        <>
            <form>
                <div className="flex gap-4">
                    {/* <label className='bg-white gap-4'>From Date</label>
                    <input type="date" />
                    <label className='bg-white gap-4'>To Date</label>
                    <input type="date" /> */}
                    <input type="text" value={searchExhibition} onChange={(e) => setSearchExhibition(e.target.value)} placeholder="Search Exhibition" />
                    <button>Search</button>
                </div>
            </form>
            <div className='flex justify-center flex-wrap'>
                <div className='flex sm:gap-4 flex-wrap'>
                    {filterData().map((item) => (
                        <div key={item.exhibition?._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={`http://localhost:4000/uploads/${item.exhibition?.image}`}  alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.exihibitionName} <br />{item.exhibition?.exihibitionName} <br /> {item?.name} <br /> {item?.registeration?.name} {item.productName}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Requested
                                </a>
                                <Link to={`/artist/exihibition_product_add/${item.exhibition?._id}`}>
                                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add Exhibition Product
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};