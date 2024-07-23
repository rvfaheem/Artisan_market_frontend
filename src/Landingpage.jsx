import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Landingpage = () => {
    const [data, setdata] = useState([''])
    const [data1, setdata1] = useState([''])
    const [data2, setdata2] = useState([''])
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://artisan-market-backend.onrender.com/user/viewproduct`)
            let response2 = await axios.get(`https://artisan-market-backend.onrender.com/artist/viewonlineexihibitions_b`)
            let response3 = await axios.get(`https://artisan-market-backend.onrender.com/artist/viewofflineexihibitions`)
            console.log(response.data)
            setdata(response.data)
            setdata(response.data.slice(0, 5));
            console.log(response2.data)
            setdata1(response2.data)
            setdata1(response2.data.slice(0, 5));
            console.log(response3.data)
            setdata2(response3.data)
            setdata2(response3.data.slice(0, 5));
        }
        fetchData()
    }, [])


    return (
        <>
            <div>
                <div className="relative">
                    <img className="w-screen h-auto" src="art.jpg" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gray-800 text-3xl bg-opacity-75 text-white p-6 md:p-20 rounded-lg text-center">
                            <p className="text-lg md:text-3xl">
                                Everyone gets a platform to show off their skills and they can use it to make earnings and users can buy the products. That is Paper origami, Drawing, painting, flower, gift, sculpture, bottle art,...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">PRODUCTS</h1><br /><br />
                <div>
                    <div className='flex sm:gap-4 flex-wrap justify-evenly w-100'>
                        {data.map((item) => (
                            <section className="w-full sm:w-3/12 p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img className='w-full h-72 object-cover rounded-xl' src={`https://artisan-market-backend.onrender.com/uploads/${item.Image}`} alt="" />
                                <h1 className="text-3xl my-5">{item.productName}</h1>
                                <h2 className="font-semibold mb-5">{item.price}</h2>
                                <Link to={`/product_detail/${item._id}`}>
                                    <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Buy Now</button>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <br /><br />
            <div>
                <h1 className="text-gray-900 text-3xl text-white title-font font-medium mb-1">EXHIBITIONS</h1><br /><br />
                <h1 className="text-3xl title-font text-gray-500 tracking-widest">ONLINE</h1><br />
                <div>
                    <div className='flex sm:gap-4 flex-wrap justify-evenly w-100'>
                        {data1.map((item) => (
                            <section className="w-full sm:w-3/12 p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img className='w-full h-72 object-cover rounded-xl' src={`https://artisan-market-backend.onrender.com/uploads/${item.image}`} alt="" />
                                <h1 className="text-3xl my-5">{item.exihibitionName}</h1>
                                <Link to="/login">
                                    <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">MORE DETAILS</button>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
                <br /><br />
                <h1 className="text-3xl title-font text-gray-500 tracking-widest">OFFLINE</h1><br />
                <div>
                    <div className='flex sm:gap-4 flex-wrap justify-evenly w-100'>
                        {data2.map((item) => (
                            <section className="w-full sm:w-3/12 p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <img className='w-full h-72 object-cover rounded-xl' src={`https://artisan-market-backend.onrender.com/uploads/${item.image}`} alt="" />
                                <h1 className="text-3xl my-5">{item.exihibitionName}</h1>
                                <h1 className="text-3xl my-5">{item.venue}</h1>
                                <Link to="/login">
                                    <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">MORE DETAILS</button>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
