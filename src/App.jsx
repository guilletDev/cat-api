import {useState, useEffect} from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENPOINT_IMAGE_URL: `https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true`

export const App = ()=>{
    const [fact, setFact] = useState([])

    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => setFact(data.fact))
        .catch(error => console.log(error))
    },[])

    return(
        <>
            <h1>Soy app</h1>
            <p>{fact}</p>
        </>
    )
}