import React, { useState } from 'react';

function PersonMenu(props) {
  /* let {setPersonNumber}=props
  const [personSearch, setPersonSearch]=useState(0) */
  let { setPersonName } = props
  const [personSearch, setPersonSearch] = useState('')

  return (
    <div className="person-menu">
      {/* Введите число от 1 до 83. */}
      <br />
      <input type="text"
        placeholder="search"
        
        /* onChange = {(e) => setPersonSearch (e.target.value)}
        onKeyPress={((e) => {
          if (e.key === 'Enter') {
            setPersonNumber(personSearch)
          }
        })} */

        onChange={(e) => setPersonSearch(e.target.value)}
        onKeyPress={((e) => {
          if (e.key === 'Enter') {
            setPersonName(personSearch)
          }
        })}
      />
      <input type="button"
        value="Поиск"
        //onClick = {()=> setPersonNumber(personSearch)} 
        onClick={() => setPersonName(personSearch)}
      />
    </div>
  )
}

export default PersonMenu;