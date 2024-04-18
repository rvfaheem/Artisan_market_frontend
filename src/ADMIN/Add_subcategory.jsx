import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Add_subcategory = () => {
  let id = localStorage.getItem('id');
  const [category, setCategory] = useState([]);
  const [data, setData] = useState('');

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/admin/viewcategory`);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/admin/addsubcategory`, data);
      console.log(response);
      setData('');
    } catch (error) {
      console.error('Error adding subcategory:', error);
    }
  }

  return (
    <div>
      <div className='sub py-8 bg-center pt-8 ml-16 flex justify-center'>
        <div className='bg-[#AED0E9] flex flex-col justify-center items-center w-9/12 h-96 p-8 ml-4 mb-8 mt-4 gap-4'>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-wrap mb-6">
              <label className='font-semibold text-[20px] w-48'>ADD CATEGORY</label>
              <div className="relative w-full mb-3">
                <select
                  name="categoryid"
                  onChange={handleChange}
                  className="block appearance-none w-full bg-transparent border-b-2 border-gray-300 focus:border-black text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="" disabled>Select category</option>
                  {category?.map((item) => (
                    <option key={item._id} value={item._id}>{item.category}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <label className='font-semibold text-[20px]'>ADD SUB CATEGORY</label>
              <input className='mb-3 px-4 py-2 leading-tight w-48 appearance-none bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none text-gray-700' type="text" onChange={handleChange} name='sub_category' />
            </div>
            <button className='px-4 py-2 font-bold text-lg bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700' type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

