import Card from "./Card"
import { d } from '../data/config'
import { useState } from 'react'

function myFilter(search_txt, data) {
    let filteredData = data.filter((res) => {
        return res.name.toLowerCase().includes(search_txt)
        // console.log(filteredData)
    })
    return filteredData
}

const Body = () => {
    // also you can destructure like this
    // const a = useState()
    // const [search_txt,setSearch]=a
    const [search_txt, setSearch_txt] = useState('')

    const [data, setData] = useState(d)

    // useState hook
    // hooks are nothing but functions
    // when u have to use local variable inside react --> useState

    return (
        <div className="body">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value={search_txt}
                    onChange={(e) => {
                        setSearch_txt(e.target.value)
                    }}
                />
                <button id="search-btn" onClick={
                    // i can write js inside {} these braces
                    () => {
                        const filteredData = myFilter(search_txt, data)

                        setData(filteredData)
                    }}>
                    Search
                </button>
            </div>
            <div id="cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data.map((res) => {
                        return (
                            <Card {...res} key={res.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body