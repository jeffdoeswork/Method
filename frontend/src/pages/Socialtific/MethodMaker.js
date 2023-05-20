import React, { useState, useEffect } from 'react'
import Artifact from './Artifacts/Artifact';
import ArtifactSlider from './Methodmaker/ArtifactSlider';

const Socialtific = () => {
  const url = process.env.REACT_APP_URL

  const [getdata, setGetdata] = useState([]);
  const [getobs, setGetobs] = useState([]);



let getDatas = async() => {
  let response2 = await fetch(`http://${url}/api/datas`, {
      method:'GET',})
      let data2 = await response2.json()
      setGetdata(data2)
}
let getObs = async() => {
  let response2 = await fetch(`http://${url}/api/observations`, {
      method:'GET',})
      let data2 = await response2.json()
      setGetobs(data2)
}

useEffect(()=> {
  getDatas();
  getObs();
}, [])

  return (
    <div>
      <ArtifactSlider getdata={getdata} artifact_className="data_artifact" />
      <br></br>
      <ArtifactSlider getdata={getobs} artifact_className="obs_artifact" />

    </div>
  )
}

export default Socialtific
