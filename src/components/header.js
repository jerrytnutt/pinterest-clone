import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Input from "./input";
import auth  from "./firebase";
import {db} from "./firebase"

const Header = ({setimageArray,searchTerm,setsearchTerm}) =>{
  const [signIn, setsignIn] = useState(false)

  const [currentUser, setcurrentUser] = useState()
  console.log("Current User", currentUser)

  const createNewAccount = (email,password,existingAccount=false) => {
   // if (currentUser){
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
       console.log(userCredential.user)
      })
     .catch((error) => {
       /////
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
     });
     ///
     const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
      return unSub
   // }  
  }

  const signInExistingAccount = (email,password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      console.log(error.code)
    });
    const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
      return unSub
  }
  
   useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        setcurrentUser(user)
      } else {
        console.log("No current User")
      }
    });
  }, []);

  const searchPhotos = async () => {
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=${searchTerm}&per_page=50`)
    const json = await res.json()
    setimageArray(json.results)   
    }

    const displaySignIn = () => {
      console.log(auth.currentUser)
      setsignIn(true)
    }

    const setData = () => {
      console.log(auth.currentUser.uid)
      let con = auth.currentUser.uid
      console.log(currentUser)
      console.log(db)
      return db.collection('users').doc(con).set({
        bio:"John"
      })
     
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
        <Link  to="/" >
          <i onClick={searchPhotos} className="fas fa-search"></i>
          </Link>
          <input type="text" onChange={handleChange} placeholder="Search"/>
        </div>
          <i onClick={setData} className="fas fa-bell"></i>
          <i className="fas fa-comment-dots"></i>
          <i onClick={displaySignIn} className="fas fa-circle"></i>
          <i className="fas fa-sort-down"></i>
          
          {signIn ? <Input createNewAccount={createNewAccount} signInExistingAccount={signInExistingAccount}/>

           : ''}
      </div>
    )
}
export default Header