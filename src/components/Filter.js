import React from 'react'
import { FiSearch } from 'react-icons/fi'
import '../Home/header.css'

export default function Filter(props) {

    console.log(props.data);
    function searchFun(value) {
        let watches = props.data

        let newFilteredData = watches.filter(item => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })

        props.action(newFilteredData)
    }

    
    return (
        <div>
            <div>
                <input onInput={(e) => searchFun(e.target.value)} className='search' type="text" placeholder='Qidirish...' />
                <button className='search_button'> <span ><FiSearch /></span> Qidirish</button>
            </div>
        </div>
    )
}
