import React, { useState, useEffect } from 'react'
import Artifact from './Artifacts/Artifact';
import ArtifactSlider from './Methodmaker/ArtifactSlider';

const Socialtific = () => {
  const [getdata, setGetdata] = useState([
       
    {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
    {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
]);

  return (
    <div>
      <h1>Socialtific Method</h1>
      <ArtifactSlider getdata={getdata}/>
    </div>
  )
}

export default Socialtific
