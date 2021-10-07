import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react"
import auth  from "./firebase";
import {db} from "./firebase"
import Image from "./image";

const ImagePage = ({searchTerm}) =>{
  const [newData, setnewData] = useState([])
  
  let data = useLocation();
    
  let linkPage = data.linkPage;
    if (data.linkPage == null){
      console.log("Null")
    }else{
      linkPage = data.linkPage
      }

      
    useEffect(() => {
      
      const photo = async () => {
      const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=${searchTerm}&per_page=30`)
      const json = await res.json()
      setnewData(json.results)  
          }
      photo()
      }, [searchTerm]);
      const savePhoto = async () => {
        let con = auth.currentUser.uid
        const currentArray = db.collection('users').doc(con);
        const doc = await currentArray.get();
        if (!doc.exists) {
          console.log(7)
          const savedPhotoArray = []
          savedPhotoArray.push(data.state.urls.regular)
            return db.collection('users').doc(con).set({
              name: "john",
              photoArray:savedPhotoArray
          })

        }else{
          console.log(4)
          let newArray = doc.data().photoArray
          newArray.push(data.state.urls.regular)
          return db.collection('users').doc(con).update({
            name: "john",
            photoArray:newArray
        })
         } 
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
            <div className="actionBox">
              <button onClick={savePhoto} className="actionSave">Save</button>
            </div>
            <div className="des">
              <h2>{data.state.alt_description}</h2>

              <div className="PageLink" onClick={() => {window.open(linkPage)}}>{data.linkPage}</div>

            </div>
            <div className="profileDetails">
              <div className="blockOne">
                <img src={data.state.user.profile_image.large} alt=""></img>
                <div className="ptag">
                  <p>{data.state.user.name}</p>
                  <p>{data.state.user.location}</p>
                </div>
              </div>
            </div>
                
                </div>
            </div>
            <h2>More Like This</h2>
            <div>
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