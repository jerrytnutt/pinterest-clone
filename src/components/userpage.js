import auth  from "./firebase";
import {db} from "./firebase"
import {useState, useEffect} from "react"

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
     <div className="userPage">
       <h2>{newArray}</h2>
     </div>
               )
           }
           export default UserPage