import React, { useState, useEffect } from 'react';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

const api = 'https://swapi.dev/api/'

function PersonsContent(props) {
  //const [data, setData] = useState(null)//для вывода одного элемента по номеру
  //let { personNumber } = props

  const [data, setData] = useState('') //для вывода одного элемента по наименованию
  let { personName } = props

  const [list, setList] = useState([]) //вывод списка
  let { page, setPage } = props

  //для вывода одного элемента по номеру

  /* useEffect(() => {
    fetch(`${api}people/${personNumber}/`)
      .then(res => (res.json()))
      .then(res => setData(res))
      .catch(error => console.error(error))
  }, [personNumber]) */

  //для вывода одного элемента по названию

  useEffect(() => {
    fetch(`${api}people/?search=${personName}`)
      .then(res => (res.json()))
      .then(res => setData(res))
      .catch(error => console.error(error))
  }, [personName])

  // для вывода списка элементов

  useEffect(() => {

    fetch(`${api}people/?page=${page}`)
      .then(res => (res.json()))
      .then(res => setList(res.results))
      .catch(error => console.error(error))
  }, [page])

  //для вывода одного элемента по номеру

  /* if (personNumber>0) {
          if (data?.name) {
              return (
                  <>
                  Name: {data?.name}<br/>
                  Hight: {data?.height}<br />
                  Mass: {data?.mass}<br />
                  Hair color: {data?.hair_color}<br />
                  Skin color: {data?.skin_color}<br />
                  Eye color: {data?.eye_color}<br />
                  Birth year: {data?.birth_year}<br />
                  Gender: {data?.gender}<br />
                  </>
  
              )
          } else {
              return (
                  <>
                      Такого героя нет.
                  </>
              )
          }
      } else {
          
          //для вывода списка элементов
  
          return (
              <>
                  <div className="div_list">
                      <ul>
                          {list.map((el) => <li key={el.name}>
                              Name: {el.name}<br />
                              Hight: {el.height}<br />
                              Mass: {el.mass}<br />
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

  if (personName) {
    /* if (data.count > 0) {
      return (
        <>
          Name: {data?.results[0].name}<br />
          Hight: {data?.results[0].height}<br />
          Mass: {data?.results[0].mass}<br />
          Hair color: {data?.results[0].hair_color}<br />
          Skin color: {data?.results[0].skin_color}<br />
          Eye color: {data?.results[0].eye_color}<br />
          Birth year: {data?.results[0].birth_year}<br />
          Gender: {data?.results[0].gender}<br />
        </>
      )
    } else {
      return (
        <>
          Такого героя нет.
        </>
      )
    } */
    console.log("Hello")
  } else {

    //для вывода списка элементов

    return (
      <>
        <div className="div_list">
          <ul>
            {/* {list.map((el) => <li key={el.name}>
              Name: {el.name}<br />
              Hight: {el.height}<br />
              Mass: {el.mass}<br /><br />
            </li>)} */}
          </ul>
        </div>

        {/* пагинация */}

        {<div className="div_pagin">
          <Pagination
            currentPage={page}
            totalPages={9}
            changeCurrentPage={setPage}
            theme="bottom-border"
          />
        </div>}
      </>
    )
  }

}

export default PersonsContent;