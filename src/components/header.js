import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Input from "./input";
import auth  from "./firebase";

const Header = ({setimageArray,searchTerm,setsearchTerm,signIn,setsignIn}) =>{
  const [currentUser, setcurrentUser] = useState(false)
  const [boxDisplay, setboxDisplay] = useState("none")

  const createNewAccount = (email,password,random=false) => {
    setsignIn(false)
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
         console.log(userCredential.user)
      })
     .catch((error) => {
       if (random===true){
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for ( var i = 0; i < 10; i++ ) {
          result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        email = `${result}@website.com`
        password = "password12345"
       }
      auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
          })
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert(`Email address already in use.`);
              break;
            case 'auth/invalid-email':
              alert(`Email address  is invalid.`);
              break;
            case 'auth/operation-not-allowed':
              alert(`Error during sign up.`);
              break;
            case 'auth/weak-password':
              alert('Password is not strong enough. Add additional characters including special characters and numbers.');
              break;
            default:
              alert(error.message);
              break;
          } 
          });
          const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
          return unSub
     });
     const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
      return unSub 
  }

  const signInExistingAccount = (email,password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      alert(error.message)
    });
    const unSub = auth.onAuthStateChanged(user => {setcurrentUser(user)})
      return unSub
  }

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
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
      if (signIn){
        return setsignIn(false)
      }
      setsignIn(true)
    }

    const signOut = () => {
      setcurrentUser(null)
      auth.signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }

    const handleChange =  (e) => {
      e.preventDefault()
      setsearchTerm(e.target.value)
    }

    const boxDisplayChange = () => {
      if (boxDisplay === "none"){
        return setboxDisplay("flex")
      }
      return setboxDisplay("none")
    }

    return(
      <div className="header">
        <i className="fab fa-pinterest-square"></i>
        <Link  to="/" >
          <button>Home</button>
        </Link>
        <div className="input-wrapper">
          <i onClick={searchPhotos} className="fas fa-search"></i>
          <input type="text" onChange={handleChange} placeholder="Search"/>
        </div>
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-dots"></i>
          <i onClick={displaySignIn} className={`fas fa-circle ${currentUser ? 'green' : 'grey'}`}></i>
          <i onClick={boxDisplayChange} className="fas fa-sort-down"></i>

          <div  style={{ display: boxDisplay}} className="selectionBox">
            <button onClick={signOut}>Sign Out</button>
           <Link  to={currentUser ? '/UserPage' : '#'} style={{ color: "grey" }} >
             <button>Collection</button>
           </Link>
          </div>
          {signIn ? <Input createNewAccount={createNewAccount} signInExistingAccount={signInExistingAccount}/>

           : ''}
      </div>
    )
}
export default Header