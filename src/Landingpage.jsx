import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Landingpage = () => {
    const [data, setdata] = useState([''])
    const [data1, setdata1] = useState([''])
    const [data2, setdata2] = useState([''])
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/user/viewproduct`)
            let response2 = await axios.get(`http://localhost:4000/artist/viewonlineexihibitions`)
            let response3 = await axios.get(`http://localhost:4000/artist/viewofflineexihibitions`)
            console.log(response.data)
            setdata(response.data)
            console.log(response2.data)
            setdata1(response2.data)
            console.log(response3.data)
            setdata2(response3.data)
        }
        fetchData()
    }, [])


    return (
        <>
            <div>
                <div><img className="w-screen h-9/12" src="image.jpg" alt="" /></div>
            </div><br /><br />
            <div>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">PRODUCTS</h1><br /><br />
                <div>
                    <div className='flex sm:gap-4 flex-wrap justify-evenly w-100'>
                        {data.map((item) => (


                                    <section class="w-3/12  p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img class="rounded-xl" className='w-96 h-72' src={`http://localhost:4000/uploads/${item.Image}`} alt="" />
 
                                        <h1 class="text-3xl my-5">{item.productName}</h1>
                                        <p class="mb-5">{item.description}</p>
                                        <h2 class="font-semibold mb-5">${item.price}</h2>
                                        <Link to={`/product_detail/${item._id}`}><button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Buy Now</button></Link>
                                    </section>

  
                          
                        ))}
                    </div>
                </div>
            </div>
            <div>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">EXIHIBITIONS</h1><br /><br />
                <h1 class="text-sm title-font text-gray-500 tracking-widest">ONLINE</h1>
                <div>
                <div className='flex sm:gap-4 flex-wrap justify-evenly w-100'>
                        {data1.map((item) => (


                                    <section class="w-3/12  p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img class="rounded-xl" className='w-96 h-72' src={`http://localhost:4000/uploads/${item.image}`} alt="" />

                                        <h1 class="text-3xl my-5">{item.exihibitionName}</h1>
                                        <p class="mb-5">{item.description}</p>
                                        {/* <h2 class="font-semibold mb-5">{item.startdate}</h2> */}
                                    <Link to="/login">    <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">MORE DETAILS</button></Link>
                                    </section>

  
                          
                        ))}
                    </div>
                </div>
                <h1 class="text-sm title-font text-gray-500 tracking-widest">OFFLINE</h1>
                <div>
                <div className='flex sm:gap-4 flex-wrap justify-evenly w-100'>
                        {data2.map((item) => (


                                    <section class="w-3/12  p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img class="rounded-xl" className='w-96 h-72' src={`http://localhost:4000/uploads/${item.image}`} alt="" />
                                        {/* <div class="space-x-1 flex justify-center mt-10">
                                            <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                            <svg class="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14">
                                                <path
                                                    d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                </path>
                                            </svg>
                                        </div> */}
                                        <h1 class="text-3xl my-5"> {item.exihibitionName}</h1>
                                        <p class="mb-5"> {item.description}</p>
                                        <h2 class="font-semibold mb-5">VENUE : {item.venue}</h2>
                                        {/* <h2 class="font-semibold mb-5">{item.startdate}</h2>
                                        <h2 class="font-semibold mb-5">{item.enddate}</h2> */}
                                        <Link to="/login"><button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">MORE DETAILS</button></Link>
                                    </section>

  
                          
                        ))}
                    </div>                    
                </div>
            </div>

        </>
    )
}

