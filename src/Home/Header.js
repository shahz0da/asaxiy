import React, { useEffect, useState } from 'react'
import './header.css'
import { FiGlobe, FiShoppingCart, FiHeart } from 'react-icons/fi'
import { MdPayment, MdPerson } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import {AiOutlineMenu} from 'react-icons/ai'
import Filter from '../components/Filter'
import getData from '../utils/getData'

function Header() {
    const [data, setData] = useState([])


    useEffect(() => {
        getData().then(json => {
            setData(json.data.results)
            console.log(json.data.results);
        })

    }, [])
    return (
        <div className='container'>
            <div className="main_div">
                <img className='logo' src="https://play-lh.googleusercontent.com/HMAlPtWHFtgPX44mHfgqA6P7CjDnnUFq849cVkf6hqTvH08O-CGQdGtcYrFFdHS3Yi8" alt="" />
                <Filter data={data} action={(value) => setData(value)}/>
                <div>
                    <ul className='ul'>
                        <li><h2><MdPayment/></h2>To'lov</li>
                        <li><h2><TbTruckDelivery /></h2>Trek</li>
                        <li>
                            <h2><FiGlobe /></h2>
                            <select className='select' name="" id="">
                                <option value="">O'zbekcha</option>
                                <option value="">Русский</option>
                            </select>
                        </li>
                        <li>
                            <h2><FiShoppingCart /></h2>
                            <span class="position-absolute start-10 badge rounded-pill bg-primary"> 0</span>
                            Savatcha
                        </li>
                        <li>
                            <h2><FiHeart /> </h2>
                            <span class="position-absolute start-10  badge rounded-pill bg-primary"> 0</span>
                            Sevimlilar
                        </li>
                        <li><h2><MdPerson /></h2>Кабинет</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div>
                <ul className='ul2'>
                    <li><AiOutlineMenu  className='icon me-3'/>Barcha bo'limlar</li>
                    <li>Yangiliklar</li>
                    <li>Yangi kelganlar</li>
                    <li>Chegirmalar</li>
                    <li>Kitoblar</li>
                    <li>Telefonlar va gadjetlar</li>
                    <li>Televizorlar</li>
                    <li>Sport buyumlari</li>
                </ul>
            </div>
        </div>
    )
}

export default Header