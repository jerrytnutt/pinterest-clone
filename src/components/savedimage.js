import {useState, useEffect} from "react"

const Savedimage = ({item}) =>{
    const [display, setdisplay] = useState("none")
    //console.log(item)
    const changeDisplay = () =>{
        setdisplay("flex")
    }
   
    return(
      <div onClick={changeDisplay} className="card">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="shell">
        <div className="popup-background"></div>
        <img src={item[0]} alt=""></img>
        <div style={{ display: display}} className="regularI"><img src={item[1]} alt=""></img></div>
            </div>
        </div>
    )
}
export default Savedimage