import './App.scss';
import {useState} from "react"
import Header from "./components/header";
import Gallery from "./components/gallery";
import ImagePage from "./components/imagepage";
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'

function App() {
  const [imageArray, setimageArray] = useState([])
  return (
    <Router>
    <div className="App">
    <Header setimageArray={setimageArray}/>
    <Route exact path="/">
      
      <Gallery imageArray={imageArray}/>
    </Route>
    <Route exact path={`/shop/:subId`} >
      <ImagePage/>
    </Route>
    </div>
    </Router>
  );
}

export default App;
