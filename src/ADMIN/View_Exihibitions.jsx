import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const View_Exihibitions = () => {

    let id = localStorage.getItem('id');
    console.log(id);

    const [data, setData] = useState([]);

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://artisan-market-backend.onrender.com/admin/viewexihibitions/${id}`);
            console.log(response.data);
            setData(response.data);
        };
        fetchData();
    }, [refresh]);

  return (
    <div>View_Exihibitions</div>


    
  )
}
