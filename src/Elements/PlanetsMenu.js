import React, {useState} from 'react';

function PlanetsMenu(props){
    // let {setPlanetsNumber}=props
    // const [planetsSearch, setPlanetsSearch]=useState(0)
    let {setPlanetsName}=props
    const [planetsSearch, setPlanetsSearch]=useState('')

    return (
    <div className = "planets-menu">
        {/* Введите число от 1 до 60. */}
        <br/>
        <input type = "text"
           placeholder = "search"
      
           /* onChange={((e)=>setPlanetsSearch(e.target.value))}
           onKeyPress={((e) => {
            if (e.key === 'Enter') {
              setPlanetsNumber(planetsSearch)
            }
          })} */

          onChange={((e)=>setPlanetsSearch(e.target.value))}
           onKeyPress={((e) => {
            if (e.key === 'Enter') {
              setPlanetsName(planetsSearch)
            }
          })}
        />
        <input type = "button"
           value = "Поиск"
           //onClick={()=>setPlanetsNumber(planetsSearch)}
           onClick={()=>setPlanetsName(planetsSearch)}    
        />
    </div>
    )
}

export default PlanetsMenu;