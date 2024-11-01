import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const Update_exihibition = () => {
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`https://artisan-market-backend.onrender.com/artist/viewupdateexihibition/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching exhibition data:", error);
      }
    };
    fetchdata();
  }, [id]);

  const handleFile = (event) => {
    setData({ ...data, image: event.target.files[0] });
  };

  const handleChanage = (event) => {
    const { name, value, files } = event.target;

    if (name === 'image') {
      setData({ ...data, image: files[0] });
    } else {
      setData({ ...data, [name]: value });

      if (name === 'startdate') setStartDate(value);
      if (name === 'enddate') setEndDate(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (startDate && endDate && startDate > endDate) {
      toast.error('End date cannot be before start date.');
      return;
    }

    const formdata = new FormData();
    for (const key in data) {
      if (data[key]) formdata.append(key, data[key]);
    }

    try {
      const response = await axios.put(`https://artisan-market-backend.onrender.com/organiser/editexihibition/${id}`, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Updated Online Exhibition');
      setTimeout(() => navigate('/organiser/viewcreateexihibition'), 1000);
    } catch (error) {
      console.error("Error updating exhibition:", error);
      toast.error("Failed to update exhibition");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="organise min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Update Exhibition</h1>
          <form onSubmit={handleSubmit}>
            {/* Other Input Fields */}
            <div className="relative z-0 w-full mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">Starting Date</label>
              <input
                type="date"
                name="startdate"
                min={currentDate}
                value={startDate}
                onChange={handleChanage}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <div className="relative z-0 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">Ending Date</label>
              <input
                type="date"
                name="enddate"
                min={startDate || currentDate} // Ensure end date is not before start date
                value={endDate}
                onChange={handleChanage}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


