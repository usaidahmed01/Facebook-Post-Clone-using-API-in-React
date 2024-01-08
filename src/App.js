import logo from './logo.svg';
import './App.css';
import FBPost from './components/fbpost';
import { useEffect, useState } from 'react';
import loading from './Assets/loading.gif'


function App() {
  const [objectsFromAPI, setObjectsFromAPI] = useState([])

  useEffect(() => {
    dataFromAPI()

  }, [])
  const dataFromAPI = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setObjectsFromAPI(res.products))
    // .then(res => console.log(res.products))


  }

  if (!objectsFromAPI.length) {
    return <div className='loading-div'><img src={loading} /></div>


  }

  return (
    <div className="App">
      <header className="App-header">
        <div>

          {objectsFromAPI.map(item => {
            return <>  <br /> <FBPost brand={item.brand} title={item.title} images={item.images} price={item.price} description={item.description} /> </>





          })}








        </div>
      </header>
    </div>
  );
}

export default App;
