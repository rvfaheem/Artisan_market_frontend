import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Exihibition = () => {
  const [data, setData] = useState([]);
  const [exhibitionData, setExhibitionData] = useState({});
  const [timeRemaining, setTimeRemaining] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productResponse, exhibitionResponse] = await Promise.all([
          axios.get(`http://localhost:4000/user/viewexihibitionproduct1/${id}`),
          axios.get(`http://localhost:4000/user/viewonlineexihibitiondetailsuser/${id}`)
        ]);
  
        setData(productResponse.data);
        setExhibitionData(exhibitionResponse.data);
  
        const now = new Date();
        let endDate = new Date(exhibitionResponse.data.enddate);
        
        // Check if current time is after 12 PM on the end date
        if (now.getHours() >= 12 && now.getDate() === endDate.getDate()) {
          endDate.setDate(endDate.getDate() + 1); // Set end date to the next day
          endDate.setHours(12, 0, 0, 0); // Set time to 12 PM
        }
  
        const timeDiff = endDate - now;
  
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
        setTimeRemaining(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  

  return (
    <div className='flex sm:gap-4 flex-wrap justify-evenly'>
      <div className="mb-8">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{exhibitionData.exihibitionName}</h1>
        {/* <p className="font-bold text-gray-700 dark:text-gray-300">START DATE: {new Date(exhibitionData.startdate).toLocaleDateString()}</p>
        <p className="font-bold text-gray-700 dark:text-gray-300">END DATE: {new Date(exhibitionData.enddate).toLocaleDateString()}</p> */}
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-xl">
              {timeRemaining}
            </span>
            
            Remaining
          </div>
        </div>
      </div>
      <div className='flex sm:gap-4 flex-wrap justify-evenly'>
      <br /><br /><br /><br /><br /><br />
      {data.map((item) => (
        <div key={item.product?._id} className="container p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          <img className="rounded-xl h-80 w-72" src={`http://localhost:4000/uploads/${item.product?.image}`} alt="" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="mt-5 text-2xl font-semibold">{item.product?.productName}</h1>
              <p className="mt-2">{item.abc?.exihibitionName}</p>
              <p className="mt-2">{item.product?.artist}</p>
              <p className="mt-2">{item.product?.rate}</p>
              <p className="mt-2">{item.artist}</p>
              <p className="mt-2">{item?.subcategory?.sub_category}</p>
              <p className="mt-2">{item?.category?.category}</p>
            </div>
            <div>
              <Link to={`/user/exi_prod_details/${item?.product?._id}`}>
                <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

