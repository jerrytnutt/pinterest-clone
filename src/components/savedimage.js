import {useState} from "react"

const Savedimage = ({item,getArray}) =>{
    const [display, setdisplay] = useState("none")

  
    const changeDisplay = () =>{
        
      if (display === "none"){
          return setdisplay("flex")
      }
      return setdisplay("none")
        
    }
    
   
    return(
      <div onClick={changeDisplay} className="card">
        <div onClick={() => {getArray(true,item[0])}} className="shell">
        <div className="popup-background"></div>
        <img src={item[0]} alt=""></img>
        <div style={{ display: display}} className="centerImage"><img src={item[1]} alt=""></img></div>
            </div>
        </div>
    )
}
export default Savedimage