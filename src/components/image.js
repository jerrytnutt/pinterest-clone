import {Link} from 'react-router-dom'
import auth  from "./firebase";
import {db} from "./firebase"
import { useHistory } from "react-router-dom";

const Image = ({item,setsignIn}) =>{
  const history = useHistory();
  let newUrl = item.user.portfolio_url
  let linkPage = item.user.portfolio_url
  if (newUrl !== null){
    if (newUrl.match(/https?:\/\//)){
      newUrl = newUrl.replace(/https?:\/\//, "")
   }
  }else{
    newUrl = item.user.instagram_username
    linkPage = `https://www.instagram.com/${item.user.instagram_username}`
   }
   const itemId = item.id
   const newTo = { 
        pathname: `/shop/${itemId}`, 
        state: item,
        newUrl: newUrl,
        linkPage: linkPage
      };
    const savePhoto = async () => {
      if (auth.currentUser === null){
        setsignIn(true)
        return null
      }
      let con = auth.currentUser.uid
      const currentArray = db.collection('users').doc(con);
      const doc = await currentArray.get();
      
      if (!doc.exists) {
        const savedPhotoArray = []
        savedPhotoArray.push({0:item.urls.small,1:item.urls.regular})
        console.log(item.urls)
        return db.collection('users').doc(con).set({
          name: "john",
          photoArray:savedPhotoArray
        })
      } else {
        let newArray = doc.data().photoArray
        newArray.push({0:item.urls.small,1:item.urls.regular})
        return db.collection('users').doc(con).update({
          name: "john",
          photoArray: newArray
      })
       } 
    }
    const viewPhoto = () => {
      return history.push(newTo)
    }
    return(
      <div className="card">
        <div onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} className="shell">
          <div className="popup-background"></div>
          <div className="saveButton" >
            <button className="view" onClick={viewPhoto}>View</button>
            <button onClick={savePhoto}>Save</button></div>
             
            <img src={item.urls.small} alt=""></img>
           
            <div className="buttonBox">
            {newUrl ? <button onClick={() => {window.open(linkPage)}} className="one">{newUrl}</button>
           : ""}
            </div>
        </div>
       </div>
    )
}
export default Image