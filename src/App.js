import './App.scss';
import {useState, useEffect} from "react"
import Header from "./components/header";
import Gallery from "./components/gallery";
import ImagePage from "./components/imagepage";
import {BrowserRouter as Router,Route}  from 'react-router-dom'

function App() {
  const [imageArray, setimageArray] = useState([])
  const [searchTerm, setsearchTerm] = useState("puppy")

  useEffect(() => {
    const createDefaultArray = async () => {
      const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=${searchTerm}&per_page=20`)
      const json = await res.json()
      setimageArray(json.results)  
      }
      return createDefaultArray()
  }, [searchTerm]);
  
  return (
    <Router>
    <div className="App">
    <Header setimageArray={setimageArray} searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
    <Route exact path="/">
      
      <Gallery imageArray={imageArray}/>
    </Route>
    <Route exact path={`/shop/:subId`} >
      <ImagePage searchTerm={searchTerm}/>
    </Route>
    </div>
    </Router>
  );
}

export default App;