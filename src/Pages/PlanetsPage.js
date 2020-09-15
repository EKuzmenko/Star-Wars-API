import React, {useState} from 'react';
import PlanetsContent from '../Elements/PlanetsContent'
import PlanetsMenu from '../Elements/PlanetsMenu'

function PlanetsPage(props) {
  //const[planetsNumber, setPlanetsNumber]=useState(0)
  const[planetsName, setPlanetsName]=useState('')
  const [page, setPage] = useState(1)

  return (
    <div className = "planets-page">
        <PlanetsMenu 
        //planetsNumber={planetsNumber}
        //setPlanetsNumber={setPlanetsNumber}
        planetsName={planetsName}
        setPlanetsName={setPlanetsName}
        />
        <PlanetsContent 
        //planetsNumber={planetsNumber}
        planetsName={planetsName}
        page={page}
        setPage={setPage}
        />
    </div>
  );
}

export default PlanetsPage;