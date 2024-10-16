import "../src/App.css";
import { useCatImg } from "./hook/useCatImg";
import { useCatFact } from "./hook/useCatFact";


/* const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact' */
/* const CAT_ENPOINT_IMAGE_URL: `https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true` */
/* const URL = 'https://cataas.com/cat?json=true'
const IMAGE_URL = 'https://cataas.com/cat/says/hello?fontSize=50&fontColor=red' */



export const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImg({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de Gatos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
      
    </main>
  );
};
