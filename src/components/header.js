import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Input from "./input";
import auth  from "./firebase";

const Header = ({setimageArray}) =>{
  const [currentUser, setcurrentUser] = useState()
  const [searchTerm, setsearchTerm] = useState()
  const [signIn, setsignIn] = useState(false)

  console.log(currentUser)

  const createNewAccount = (email,password,signIn=false) => {
    if (signIn){
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
       // Signed in
       
       console.log(userCredential.user)
       // ...
      })
     .catch((error) => {
       console.log(error.code)
     });
     const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
      return unSub
    }
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    
    //let user = userCredential.user;
      })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          console.log(`Email address already in use.`);
          break;
        case 'auth/invalid-email':
          console.log(`Email address  is invalid.`);
          break;
        case 'auth/operation-not-allowed':
          console.log(`Error during sign up.`);
          break;
        case 'auth/weak-password':
          console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
          break;
        default:
          console.log(error.message);
          break;
      }
       
      });
      const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
      return unSub
  }
  
   useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
      } else {
        console.log("None")
      }
    });
  }, []);
  const searchPhoto = async () => {
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=${searchTerm}&per_page=50`)
    const json = await res.json()
    setimageArray(json.results)
        
    }
    const signUp = () => {
      console.log(auth.currentUser)
      setsignIn(true)
    }
    const handleChange =  (e) => {
      e.preventDefault()
      
      setsearchTerm(e.target.value)
            
      }
    return(
      <div className="header">
        <i className="fab fa-pinterest-square"></i>
        <Link  to="/" >
        <button>Home</button>
            </Link>
        
        
        <div className="input-wrapper">
          <i onClick={searchPhoto} className="fas fa-search"></i>
          <input type="text" onChange={handleChange} placeholder="Search"/>
        </div>
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-dots"></i>
          <i onClick={signUp} className="fas fa-circle"></i>
          <i className="fas fa-sort-down"></i>
          
          {signIn ? <Input createNewAccount={createNewAccount}/>

           : ''}
         
      </div>
    )
}
export default Header