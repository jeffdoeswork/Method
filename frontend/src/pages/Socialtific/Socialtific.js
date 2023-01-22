import React, { useState, useEffect } from 'react'
import Artifact from './Artifacts/Artifact';
import ArtifactSlider from './Methodmaker/ArtifactSlider';

const Socialtific = () => {
  const url = process.env.REACT_APP_URL

  const [getdata, setGetdata] = useState([
    {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
    {"created_at" : "10/24/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 2},   
    {"created_at" : "10/25/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 3},
]);

let getTuts = async() => {
  let response2 = await fetch(`http://${url}/api/tutorials`, {
      method:'GET',})

      let data2 = await response2.json()
      setGetdata(data2)
}

useEffect(()=> {
  getTuts();
  console.log(getdata)
}, [])

  return (
    <div>
      <ArtifactSlider getdata={getdata}/>
    </div>
  )
}

export default Socialtific
