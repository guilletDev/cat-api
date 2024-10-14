import { useState, useEffect } from "react"


//Creamos un customm hook.
//En un custom hook se puede usar precisamente los hook, a diferencia de una funcion.
export function useCatImg({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //para recuperar la imagen cada vez que tenemos una cita nueva.
    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
            .then(data => setImageUrl(data))
    }, [fact])

    return { imageUrl }
}