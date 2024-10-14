import {useState, useEffect} from 'react'
import '../src/App.css' 
import { getRandomFact } from './services/facts'
import { useCatImg } from './hook/useCatImg'

/* const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' */
/* const CAT_ENPOINT_IMAGE_URL: `https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true` */
/* const URL = 'https://cataas.com/cat?json=true'
const IMAGE_URL = 'https://cataas.com/cat/says/hello?fontSize=50&fontColor=red' */

export const App = ()=>{
    const [fact, setFact] = useState()
    const {imageUrl} = useCatImg({fact})
    

    
    

    //para recuperar la cita al cargar la pagina.
    useEffect(()=>{
        
        getRandomFact().then(newFact => setFact(newFact))
    },[])

    

    const handleClick = async ()=>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }
  

    return(
        <main>
                <h1>App de Gatitos</h1>
                <button onClick={handleClick}>Get new Fact</button>
                <section>
                {fact &&  <p>{fact}</p> }
                {imageUrl && <img src={imageUrl} alt={`image extracted using the first three words for ${fact}`} />  }
                </section>
                
        </main>
            
            
            
           
        
    )
}