import React, { useEffect, useState } from 'react'
import getData from '../utils/getData'
import './main.css'
import { FaShoppingCart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function Main() {

    const [data, setData] = useState([])
    const [value, setValue] = React.useState(2);

    useEffect(() => {
        getData().then(json => {
            setData(json.data.results)
            console.log(json.data.results);
        })

    }, [])

    return (
        <div>
            <div className='background'>
                <div className="container">
                    <div className='d-flex justify-content-between pt-4'>
                        <img className='image w-75' src="https://assets.asaxiy.uz/uploads/banner/desktop/635797f073b62.jpg.webp" alt="" />
                        <img className='image' src="https://assets.asaxiy.uz/uploads/toptoday/mobile/637c32628f3d9.jpeg" alt="" />
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-3 main">
                            <div className='d-flex justify-content-around'>
                                <p>Kitoblar</p>
                                <img src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png" alt="" />
                            </div>
                            <div>
                                {
                                    (data.length > 0) && data.map((item, index) => {
                                        return (
                                            <div className='row w-75' key={index}>
                                                <div className="col-4">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="col-8">
                                                    <p>{item.title}</p>
                                                    <p>{item.original_title}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                {
                                     (data.length > 0) && data.map((item, index) => {
                                        return (
                                            <div className="" key={index}>
                                                <div className='main p-2 mt-1'>
                                                <div className='d-flex pe-3'>
                                                    <div>
                                                        <img className='img' src="https://assets.asaxiy.uz/product/main_image/desktop//63495a03a2ad6.png.webp" alt="" />
                                                    </div>
                                                    <div>
                                                        <h4 className='icon'><FaShoppingCart /></h4>
                                                        <h4 className={item.like ? "icon" : "likes"}><FiHeart /></h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4>{item.name}</h4>
                                                    <Box>
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </Box>
                                                    <del>{item.first_cost}</del>
                                                    <h4>{item.last_cost}</h4>
                                                    <p>{item.time}</p>
                                                    
                                                </div>
                                                <div className='d-flex justify-content-around mb-1'>
                                                    <button className='buy buy1'>Rassrochka</button>
                                                    <button className='buy buy2'>Bir klikda olish</button>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                     })
                                }
                            </div>
                        </div>
                        <div className="col-9 mt-2">
                            <p>Yangi chegirmalar</p>
                            <div className='row justify-content-between'>
                                {
                                    (data.length > 0) && data.map((item, index) => {
                                        return (
                                            <div className="col-3" key={index}>
                                                <div className='main p-2 mt-1'>
                                                <div className='d-flex pe-3'>
                                                    <div>
                                                        <img className='img' src="https://assets.asaxiy.uz/product/main_image/desktop//63495a03a2ad6.png.webp" alt="" />
                                                    </div>
                                                    <div>
                                                        <h4 className='icon'><FaShoppingCart /></h4>
                                                        <h4 className='icon'><FiHeart /></h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4>{item.name}</h4>
                                                    <Box>
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </Box>
                                                    <del>{item.first_cost}</del>
                                                    <h4>{item.last_cost}</h4>
                                                    <p>{item.time}</p>
                                                    
                                                </div>
                                                <div className='d-flex justify-content-around mb-1'>
                                                    <button className='buy buy1'>Rassrochka</button>
                                                    <button className='buy buy2'>Bir klikda olish</button>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main