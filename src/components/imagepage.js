import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react"

import Image from "./image";
const ImagePage = ({searchTerm}) =>{

    const [newData, setnewData] = useState([])
    let data = useLocation();
    console.log(data)
    let linkPage = "7";
     if (data.linkPage == null){
      console.log("Null")
      }else{
        console.log(data.linkPage)
       linkPage = data.linkPage
      }
      console.log(linkPage)
      useEffect(() => {
        const photo = async () => {
          const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=${searchTerm}&per_page=20`)
          const json = await res.json()
         
           setnewData(json.results)  
          }
          photo()
      }, [searchTerm]);
     
    return(
      <div className="ImagePage">
        <div className="doubleView">
          <div className="imageLeft">
            <div className="shell">
              <img src={data.state.urls.small} alt=""></img>
            </div>
          </div>
          <div className="imageDetails">
            <div className="actionBox">
              <div className="actionLeft">
                <button ><i className="fas fa-ellipsis-h"></i></button>
                <button ><i className="fas fa-upload"></i></button>
              </div>
              <button className="actionSave">Save</button>
            </div>
            <h2 className="des">{data.state.alt_description}</h2>
            <h2>{linkPage}</h2>
            <div className="profileDetails">
              <div className="blockOne">
                <img src={data.state.user.profile_image.medium} alt=""></img>
                <div className="ptag">
                  <p>{data.state.user.name}</p>
                  <p>{data.state.user.location}</p>
                </div>
              </div>
              
                    </div>
                    <div className="action">
                        <div className="selector">
                            <button>Photos</button>
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