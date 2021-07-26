import './App.scss';
import {useState} from "react"
import Header from "./components/header";
import Gallery from "./components/gallery";

function App() {
  const [imageArray, setimageArray] = useState([])
  return (
    <div className="App">
     <Header setimageArray={setimageArray}/>
     <Gallery imageArray={imageArray}/>
    </div>
  );
}

export default App;
