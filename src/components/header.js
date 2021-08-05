import {useState} from "react"
import auth from "firebase"
const Header = ({setimageArray}) =>{
  const [searchTerm, setsearchTerm] = useState()
  const [signIn, setsignIn] = useState(false)
  console.log(auth)
  //auth.createUserWithEmailAndPassword("john@john.com", "123abbbbc")
  //.then((userCredential) => {
    // Signed in 
   // var user = userCredential.user;
   // console.log(user)
    // ...
  //})
 // .catch((error) => {
   // var errorCode = error.code;
    //var errorMessage = error.message;
    // ..
 // });
  const searchPhoto = async () => {
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=${searchTerm}&per_page=50`)
    const json = await res.json()
    //console.log(json.results)
    setimageArray(json.results)
        
    }
    const signUp = () => {
      setsignIn(true)
    }
    const handleChange =  (e) => {
      setsearchTerm(e.target.value)
            
      }
    return(
      <div className="header">
        <i className="fab fa-pinterest-square"></i>
        <button>Home</button>
        <button>Today</button>
        <div className="input-wrapper">
          <i onClick={searchPhoto} className="fas fa-search"></i>
          <input type="text" onChange={handleChange} placeholder="Search"/>
        </div>
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-dots"></i>
          <i onClick={signUp} className="fas fa-circle"></i>
          <i className="fas fa-sort-down"></i>
          
          {signIn ? <div className="signInScreen">
              <input type='text>'></input>
              <input type='text>'></input>
              <button></button>

          </div> : 'Not'}
         
      </div>
    )
}
export default Header