import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const View_Exihibitions = () => {
    const [data, setData] = useState({ resposne: [] });

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            const response = await axios.get('http://localhost:4000/admin/viewexihibitions');
            setData(response.data);
        };
        fetchData();
    }, []);

    console.log(data, 'askdhkahsd');

    return (
        <div className="relative overflow-x-auto space-y-8">
            {data.resposne.map((exhibition) => (
                <div key={exhibition._id} className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
                    {/* Exhibition Details */}
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        Exhibition: {exhibition.exihibitionName}
                    </h2>
                    <p><strong>Organisation:</strong> {exhibition.organisationId ? exhibition.organisationId.name : "N/A"}</p>
                    <p><strong>Sponsors:</strong> {exhibition.sponcers}</p>
                    <p><strong>Start Date:</strong> {new Date(exhibition.startdate).toLocaleDateString()}</p>
                    <p><strong>End Date:</strong> {new Date(exhibition.enddate).toLocaleDateString()}</p>

                    {/* Artists' Products Associated with This Exhibition */}
                    <h3 className="mt-6 text-md font-semibold text-gray-800 dark:text-gray-300">Artists and Their Works</h3>
                    <table className="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Product Name</th>
                                <th scope="col" className="px-6 py-3">Category</th>
                                <th scope="col" className="px-6 py-3">Artist Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exhibition.products?.map((product) => (
                                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {product.productName}
                                    </td>
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="px-6 py-4">{product.artistName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};




//export const View_Exihibitions = () => {