import React, {useState} from 'react';
import ShipsContent from '../Elements/ShipsContent'
import ShipsMenu from '../Elements/ShipsMenu'

function ShipsPage(props) {
  const [shipNumber, setShipNumber]=useState(9)
  
  return (
    <div className="ships-page">
        <ShipsMenu 
        shipNumber={shipNumber}
        setShipNumber={setShipNumber}
        />
        <ShipsContent 
        shipNumber={shipNumber}
        />
    </div>
  );
}

export default ShipsPage;