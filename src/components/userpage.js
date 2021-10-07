import auth  from "./firebase";
import {db} from "./firebase"
import {useEffect, useState} from "react"
import Savedimage from "./savedimage";

const UserPage = () =>{
  const [newArray, setnewArray] = useState([])
  
  
  const getArray = async (change,item) => {
   
    if (change){
      let con = auth.currentUser.uid
      
      //let Array = db.collection('users').doc(con);
      console.log(newArray)
      console.log(item)
      
      //let myArray = newArray.filter(e[0] => e[0] !== item);
      for (var i = 0;i< newArray.length;i++){
        if (newArray[i][0] === item){
          
          newArray.splice(i, 1);
          console.log(newArray)
                  
                  
        }
      }
      console.log(newArray)
      const myArray = newArray
      console.log(myArray)
        db.collection('users').doc(con).update({
            name: "john",
           photoArray:myArray
       })
        return setnewArray(myArray)
      
          
      
    }
    //console.log(0)
    let con = auth.currentUser.uid
    const currentArray = db.collection('users').doc(con);
    const doc = await currentArray.get();
    return setnewArray(doc.data().photoArray)
  }
  useEffect(() => {
    getArray() 
  });
  
  
       
     return(
      <div className="gallery">
       <div className="imageContainer">
         {newArray.map((item, index) => (
        <Savedimage key={index} item={item} getArray={getArray}/>
           )) }
           </div>
     </div>
               )
           }
export default UserPage