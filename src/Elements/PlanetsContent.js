import React, { useState, useEffect } from 'react';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

const api = 'https://swapi.dev/api/'

function PlanetsContent(props) {
    //const [data, setData] = useState(null) //для вывода одного элемента по номеру
    //let { planetsNumber } = props

    const [data, setData] = useState('') //для вывода одного элемента по наименованию
    let { planetsName } = props

    const [list, setList] = useState([]) //вывод списка элементов
    let { page, setPage } = props

    //для вывода одного элемента по номеру

    /* useEffect(() => {

        fetch(`${api}planets/${planetsNumber}/`)
            .then(res => (res.json()))
            .then(res => setData(res))
            .catch(error => console.error(error))
        }, [planetsNumber]) */

    //для вывода одного элемента по названию

    useEffect(() => {

        fetch(`${api}planets/?search=${planetsName}`)
            .then(res => (res.json()))
            .then(res => setData(res))
            .catch(error => console.error(error))
    }, [planetsName])

    // для вывода списка элементов

    useEffect(() => {

        fetch(`${api}planets/?page=${page}`)
            .then(res => (res.json()))
            .then(res => setList(res.results))
            .catch(error => console.error(error))
    }, [page])

    //для вывода одного элемента по номеру

    /* if (planetsNumber>0) {
        if (data?.name) {
            return (
                <>
                Name: {data?.name}<br />
                Rotation period: {data?.rotation_period}<br />
                Orbital period: {data?.orbital_period}<br />
                Diameter: {data?.diameter}<br />
                Climate: {data?.climate}<br />
                Gravity: {data?.gravity}<br />
                Terrain: {data?.terrain}<br />
                Surface water: {data?.surface_water}<br />
                Population: {data?.population}<br />
                </>

            )
        } else {
            return (
                <>
                    Такой планеты нет.
                </>
            )
        }
    } else {

        //для вывода списка планет

        return (
            <>
                <div className="div_list">
                    <ul>
                        {list.map((el) => <li key={el.name}>
                            Name: {el.name}<br />
                        Rotation period: {el.rotation_period}<br />
                        Orbital period: {el.orbital_period}<br /><br />
                        </li>)}
                    </ul>
                </div>
                <div className="div_pagin">
                    <Pagination
                        currentPage={page}
                        totalPages={6}
                        changeCurrentPage={setPage}
                        theme="bottom-border"
                    />
                </div>
            </>
        )
    } */

    //вывод либо одного элемента по наименованию (если вбит в поиск) либо списка

    if (planetsName) {
        if (data.count > 0) {
            return (
                <>
                    Name: {data?.results[0].name}<br />
                    Rotation period: {data?.results[0].rotation_period}<br />
                    Orbital period: {data?.results[0].orbital_period}<br />
                    Diameter: {data?.results[0].diameter}<br />
                    Climate: {data?.results[0].climate}<br />
                    Gravity: {data?.results[0].gravity}<br />
                    Terrain: {data?.results[0].terrain}<br />
                    Surface water: {data?.results[0].surface_water}<br />
                    Population: {data?.results[0].population}<br />
                </>
            )
        } else {
            return (
                <>
                    Такой планеты нет.
                </>
            )
        }
    } else {

        //для вывода списка планет

        return (
            <>
                <div className="div_list">
                    <ul>
                        {list.map((el) => <li key={el.name}>
                            Name: {el.name}<br />
                            Rotation period: {el.rotation_period}<br />
                            Orbital period: {el.orbital_period}<br /><br />
                        </li>)}
                    </ul>
                </div>
                
                {/* пагинация */}

                <div className="div_pagin">
                    <Pagination
                        currentPage={page}
                        totalPages={6}
                        changeCurrentPage={setPage}
                        theme="bottom-border"
                    />
                </div>
            </>
        )
    }
}

export default PlanetsContent;
