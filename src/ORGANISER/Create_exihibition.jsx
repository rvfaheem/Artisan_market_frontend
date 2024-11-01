import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const Create_exihibition = () => {
  let id = localStorage.getItem('id');
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState('');
  const currentDate = new Date().toISOString().split('T')[0];
  const navigate = useNavigate();

  const handleFile = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
    console.log(data);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'startdate') {
      setStartDate(value); // Set start date to use as min for end date
      setData({ ...data, [name]: value });
    } else if (name === 'enddate') {
      setData({ ...data, [name]: value });
    } else if (name === 'image') {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("exihibitionName", data.exihibitionName);
    formData.append("sponcers", data.sponcers);
    formData.append("description", data.description);
    formData.append("image", data.image);
    formData.append("startdate", data.startdate);
    formData.append("enddate", data.enddate);
    formData.append("userId", data.userId);
    formData.append("organisationId", id);

    try {
      const response = await axios.post(`https://artisan-market-backend.onrender.com/organiser/createexihibition`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response);
      toast.success('Exhibition Created');
      setTimeout(() => navigate('/organiser/viewcreateexihibition'), 1000);
    } catch (error) {
      toast.error('Error creating exhibition');
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="organise min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Create Exhibition</h1>
          <form onSubmit={handleSubmit} id="form" noValidate>
            {/* Other form fields */}

            <div className="relative z-0 w-full mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Starting Date</label>
              <input
                min={currentDate}
                type="date"
                onChange={handleChange}
                required
                name="startdate"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending Date</label>
              <input
                min={startDate || currentDate} // Set min as startDate or currentDate
                type="date"
                onChange={handleChange}
                required
                name="enddate"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

