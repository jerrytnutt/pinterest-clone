import {useState} from "react"

const Savedimage = ({item,getArray}) =>{
    const [display, setdisplay] = useState("none")
    const [two, settwo] = useState("inline-block")

  
    const changeDisplay = () =>{
        
      if (display === "none"){
          return setdisplay("flex")
      }
      return setdisplay("none")
        
    }
    const changet = () =>{
        
       
        settwo("none")
        return getArray(true,item[0])
          
      }
    
    
    return(
      <div style={{ display: two}} className="card">
        <div className="shell">
        <div className="popup-background"></div>
        <button onClick={changet}>yr</button>
        <button onClick={changeDisplay}>yryftdretretdtd</button>
        <img src={item[0]} alt=""></img>
        <div style={{ display: display}} className="centerImage"><img src={item[1]} alt=""></img></div>
            </div>
        </div>
    )
}
export default Savedimage