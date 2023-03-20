import React, { useState, useEffect } from 'react'

const MethodFeed = () => {
    const [allmethods, setAllMethods] = useState([ ]);
    const url = process.env.REACT_APP_URL

    let getMethods = async() => {
        let response = await fetch(`http://${url}/api/method_artifacts`, {
            method:'GET',})
      
            let method_data = await response.json()
            console.log("this is the first data", method_data)
            setAllMethods(method_data);
      }
      
      useEffect(()=> {
        getMethods();
        console.log("but did you map it",allmethods)
      }, [])


  return (
    <div>
        <h2> Method Feed </h2>
        {allmethods.map(method => (
            <div key={method.id} >
                <p>Title: {method.title}</p>
                <p>Username: {method.username}</p>
                <p>Created at: {method.created_at}</p>
                <p>Observation: {method.observation}</p>

                {method.datas.map(data => (
                    <p>Data: {data}</p>
                    )
                )}
                
                <p>Hypothesis: {method.hypothesis}</p>
                <p>Experiment: {method.experiment}</p>
                <p>Conclusion: {method.conclusion}</p>
            </div>
            )
        )}
    </div>

    )
}

export default MethodFeed
