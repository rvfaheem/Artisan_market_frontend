import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export const U_View_orders = () => {
    let id=localStorage.getItem('id')

    const [data, setdata] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/user/vieworders/${id}`)
            console.log(response.data)
            setdata(response.data)
        }
        fetchData()
    }, [])

    // Filter orders based on search query
    const filteredData = data.filter(item =>
        item.product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <>
            <div class='organise m-4 p-4'>
                <div class="relative overflow-x-auto">
                    {/* Search input field */}
                    <input
                        type="text"
                        placeholder="Search by product"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1 mb-4"
                    />
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    S.L No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
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
                                    Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Feedback
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">
                                        {index}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.order.date}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.product.productName}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.category.category}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.subcategory.sub_category}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.product.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        <Link to={`/user/product_feedback/${item.order._id}`}>Send Product Feedback</Link>
                                    </td>
                                    <div className='flex pt-2 pb-2 gap-3'>
                                        {item.order?.status === "delivered" &&
                                            <button className='bg-[#3BD45C] w-[100%] text-white pt-4 pb-4 rounded-xl '>Delivered</button>
                                        }
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
