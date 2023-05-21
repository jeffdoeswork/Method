import React, { useState, useEffect } from 'react'
import Artifact from './Artifacts/Artifact';
import ArtifactSlider from './Methodmaker/ArtifactSlider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Methods.css"

const Socialtific = () => {
  const url = process.env.REACT_APP_URL
  const [getobs, setGetobs] = useState([]);
  const [getdata, setGetdata] = useState([]);
  const [gethypo, setGethypo] = useState([]);
  const [getexp, setGetexp] = useState([]);
  const [getcon, setGetcon] = useState([]);


let getObs = async() => {
  let response2 = await fetch(`http://${url}/api/observations`, {
      method:'GET',})
      let data2 = await response2.json()
      setGetobs(data2)
}
let getDatas = async() => {
  let response2 = await fetch(`http://${url}/api/datas`, {
      method:'GET',})
      let data2 = await response2.json()
      console.log(data2);
      setGetdata(data2)
}
let getHypo = async() => {
  let response2 = await fetch(`http://${url}/api/hypothesis`, {
      method:'GET',})
      let data2 = await response2.json()
      setGethypo(data2)
}
let getExp = async() => {
  let response2 = await fetch(`http://${url}/api/experiments`, {
      method:'GET',})
      let data2 = await response2.json()
      setGetexp(data2)
}
let getCon = async() => {
  let response2 = await fetch(`http://${url}/api/conclusions`, {
      method:'GET',})
      let data2 = await response2.json()
      setGetcon(data2)
}
useEffect(()=> {
  getDatas();
  getObs();
  getHypo();
  getExp();
  getCon();
}, [])

  return (
    <div>
      <br></br>
      <Row>
        <Col xs={0} sm={0} md={3} xl={1}>
          <h2 className='obs_text' style={{ paddingLeft: '25px' }}> Observations:  </h2>
        </Col>
        <Col xs={12} sm={12} md={9} xl={11}>
          <ArtifactSlider getdata={getobs} />
        </Col>
      </Row>
      <br></br>
      <Row>
      <Col xs={0} sm={0} md={3} xl={1}>
          <h2 className='data_text ' style={{ paddingLeft: '25px' }}> Datas:  </h2>
        </Col>
        <Col xs={12} sm={12} md={9} xl={11}>
        <ArtifactSlider getdata={getdata} />
        </Col>
      </Row>
      <br></br>
      <Row>
      <Col xs={0} sm={0} md={3} xl={1}>
          <h2 className='hypo_text ' style={{ paddingLeft: '25px' }}> Hypotheses:  </h2>
        </Col>
        <Col xs={12} sm={12} md={9} xl={11}>
        <ArtifactSlider getdata={gethypo} />
        </Col>
      </Row>
      <br></br>
      <Row>
      <Col xs={0} sm={0} md={3} xl={1}>
          <h2 className='exp_text ' style={{ paddingLeft: '25px' }}> Experiments:  </h2>
        </Col>
        <Col xs={12} sm={12} md={9} xl={11}>
        <ArtifactSlider getdata={getexp}/>
        </Col>
      </Row>
      <br></br>
      <Row>
      <Col xs={0} sm={0} md={3} xl={1}>
          <h2 className='con_text ' style={{ paddingLeft: '25px' }}> Conclusions:  </h2>
        </Col>
        <Col xs={12} sm={12} md={9} xl={11}>
        <ArtifactSlider getdata={getcon}/>
        </Col>
      </Row>      
      <br></br>
    </div>
  )
}

export default Socialtific
