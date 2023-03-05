import React, { useState, useEffect } from 'react'
import Artifact from './Artifacts/Artifact';
import ArtifactSlider from './Methodmaker/ArtifactSlider';

const Socialtific = () => {
  const url = process.env.REACT_APP_URL

  const [getdata, setGetdata] = useState([
    
]);

let getTuts = async() => {
  let response2 = await fetch(`http://${url}/api/tutorials`, {
      method:'GET',})

      let data2 = await response2.json()
      setGetdata(data2)
}

useEffect(()=> {
  getTuts();
  console.log("my arrtifactss", getdata)
}, [])

  return (
    <div>
      <ArtifactSlider getdata={getdata}/>
    </div>
  )
}

export default Socialtific
