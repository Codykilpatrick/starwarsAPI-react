import { getStarshipList } from "../services/sw-api"
import React, { useState, useEffect } from 'react';


const StarshipList = () =>{
  const [ starshipList, setStarshipList ] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h3>STARSHIPS</h3>
      {starshipList?
      <>
      <container id="starship-container">
        {starshipList.map(starship =>
          <div key={starship.name} className='starship-el'>
            {starship.name}
          </div>  
        )}
        </container>
      </> 
      :
      <h4>Loading spaceships</h4>
      }
    </>
  )
}

export default StarshipList