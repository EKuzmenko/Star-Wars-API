import React, { useState } from 'react';
import PersonsContent from '../Elements/PersonsContent'
import PersonMenu from '../Elements/PersonMenu'

function PersonsPage(props) {
  //const[personNumber, setPersonNumber]=useState(1)
  const [personName, setPersonName] = useState('')

  return (
    <div className="peson-page">
      <PersonMenu
        //personNumber={personNumber}
        //setPersonNumber={setPersonNumber}
        personName={personName}
        setPersonName={setPersonName}
      />
      <PersonsContent
        //personNumber={personNumber}
        personName={personName}
      />
    </div>
  );
}

export default PersonsPage;