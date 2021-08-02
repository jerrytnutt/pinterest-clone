import {useLocation} from "react-router-dom";
import {useState} from "react"

import Image from "./image";
const ImagePage = () =>{
    
    const [newData, setnewData] = useState([])
    let data = useLocation();
    console.log(data)
    
    //const selfData = data.state.user.links.self
    const photo = async () => {
      const res = await fetch('https://api.unsplash.com/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=car&per_page=20')
      const json = await res.json()
       console.log(json)
       setnewData(json)  
      }
    return(
        
        <div className="ImagePage">
            <div className="doubleView">
                <div className="imageLeft">
                    
                <div className="shell">
                <img src={data.state.urls.small} alt=""></img>
               </div>
                </div>
                <div className="imageDetails">
                  
                <div className="bbBox">
              <button className="one">h</button>
              <button className="two"><i class="fas fa-upload"></i></button>
              <button className="two"><i class="fas fa-ellipsis-h"></i></button>
              </div>
            
            

                    <h2>{data.state.user.portfolio_url}</h2>
                    <h2>{data.state.alt_description}</h2>
                    <div className="profileDetails">
                        <div className="blockOne">
                        <img src={data.state.user.profile_image.small} alt=""></img>
                        <div className="ptag">
                        <p>{data.state.user.first_name}</p>
                        <p>{data.state.user.first_name}</p>
                        </div>
                      </div>
                      <div className="blockTwo">
                        <img src={data.state.user.profile_image.small} alt=""></img>
                      </div>
                    </div>
                    <div className="action">
                        <div className="selector">
                            <button onClick={photo}>Photos</button>
                            <button>Comments</button>
                        </div>
                    </div>
                </div>


            </div>
            <h2>More Like This</h2>
            <div className="g">
            <div className="m">
           
           {newData.map((item, index) => (
               
           <Image key={index} item={item}/>
           )) }
           </div>
        </div>
           
        </div>
        
       
    )
}
export default ImagePage