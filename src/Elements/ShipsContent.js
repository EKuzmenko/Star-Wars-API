import React, { useState, useEffect } from 'react';

const api = 'https://swapi.dev/api/'

function ShipsContent(props) {
  const [data, setData] = useState(null)
  let { shipNumber } = props

  useEffect(() => {
    fetch(`${api}starships/${shipNumber}/`)
      .then(res => (res.json()))
      .then(res => setData(res))
      .catch(error => console.error(error))
  }, [shipNumber])

  if (data?.name) {
    return (
      <>
        Name: {data?.name} <br />
        Model: {data?.model} <br />
        Manufacturer: {data?.manufacturer} <br />
        Starship class: {data?.starship_class} <br />
      </>
    )
  } else {
    return (
      <>
        Такого корабля не существует
      </>
    )
  }
}

export default ShipsContent;