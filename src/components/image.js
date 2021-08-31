import {Link} from 'react-router-dom'
import auth  from "./firebase";
import {db} from "./firebase"

const Image = ({item,setsignIn}) =>{
   let newUrl = item.user.portfolio_url
   let linkPage = item.user.portfolio_url
   
   if (newUrl !== null){
    if (newUrl.match(/https?:\/\//)){
     newUrl = newUrl.replace(/https?:\/\//, "")
   }
     //console.log("other",newUrl,linkPage)
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
      console.log(doc.data())
      if (!doc.exists) {
        const savedPhotoArray = []
        savedPhotoArray.push(item.urls.small)
        console.log(item.urls.small)
          return db.collection('users').doc(con).set({
            name: "john",
            photoArray:savedPhotoArray
        })
      
      } else {
        let newArray = doc.data().photoArray
        newArray.push(item.urls.small)
        
        return db.collection('users').doc(con).update({
          name: "john",
          photoArray:newArray
      })
       
       } 
    }
    return(
      <div className="card">
         <Link  to={newTo} >
        <div className="shell">
       
          <div className="popup-background"></div>
          <div onClick={savePhoto} className="saveButton" to="/" ><button>Save</button></div>
             
            <img src={item.urls.small} alt=""></img>
           
            <div className="buttonBox">
            {newUrl ? <button onClick={() => {window.open(linkPage)}} className="one">{newUrl}</button>
           : ""}
         
             
            </div>
        </div>
        </Link>
       </div>
    )
}
export default Image