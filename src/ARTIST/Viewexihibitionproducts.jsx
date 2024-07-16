import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from './bttle.jpg';
import axios from 'axios';

export const Viewexihibitionproducts = () => {
    let id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      let fetchData = async () => {
        let response = await axios.get(`http://localhost:4000/artist/exihideliveredviewproductorder/${id}`);
        console.log(response.data);
        setData(response.data);
      };
      fetchData();
    }, []);
  
    const filteredData = data.filter((item) =>
      item.product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <>
        <div className='organise m-4 p-4'>
          <div className='relative overflow-x-auto'>
            <form>
              <div className='flex gap-4'>
                {/* <label className='bg-white gap-4'>From Date</label>
                <input type='date' />
                <label className='bg-white gap-4'>To Date</label>
                <input type='date' /> */}
                <input
                  type='text'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search Product'
                />
                <button>Search</button>
              </div>
            </form>
  
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    S.L No
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Date
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    User
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Product
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Sub-Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Feedback
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
  
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black'>
                    <td className='px-6 py-4'>{index + 1}</td>
                    <td className='px-6 py-4'>{item.orders.date}</td>
                    <td className='px-6 py-4'>{item.users.name}</td>
                    <td className='px-6 py-4'>{item.product.productName}</td>
                    <td className='px-6 py-4'>{item.product.price}</td>
                    <td className='px-6 py-4'>{item.categories.category}</td>
                    <td className='px-6 py-4'>{item.sub_categories.sub_category}</td>
                    <td className='px-6 py-4'>{item.orders.feedback}</td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  
  
  