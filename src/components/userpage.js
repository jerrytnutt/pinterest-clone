import auth  from "./firebase";
import {db} from "./firebase"
import {useState, useEffect} from "react"
import Savedimage from "./savedimage";

const UserPage = () =>{
  const [newArray, setnewArray] = useState([])
  useEffect(() => {
    const getArray = async () => {
      let con = auth.currentUser.uid
  
      const currentArray = db.collection('users').doc(con);
      const doc = await currentArray.get();
      return setnewArray(doc.data().photoArray)
    }
    getArray()
  }, [newArray]);        
     return(
      <div className="gallery">
       <div className="imageContainer">
         {newArray.map((item, index) => (
        <Savedimage key={index} item={item}/>
           )) }
           </div>
     </div>
               )
           }
export default UserPage