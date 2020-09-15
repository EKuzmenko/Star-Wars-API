import React, {useState} from 'react';

function ShipsMenu(props) {
    let {setShipNumber} = props
    const [shipSearch, setShipSearch]=useState(0)
     
    return (
    <div className="ships-menu">
      Введите число от 9 до 13.<br/>
      <input type="text" 
             placeholder="search" 
             onChange={(e)=>setShipSearch(e.target.value)}
             onKeyPress={((e) => {
              if (e.key === 'Enter') {
                setShipNumber(shipSearch)
              }
            })}
        />
        <input type="button" 
            value="Поиск" 
            onClick={()=>setShipNumber(shipSearch)}
        />
    </div>
  );
}

export default ShipsMenu;