import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Input from "./input";
import auth  from "./firebase";

const Header = ({setimageArray,searchTerm,setsearchTerm,signIn,setsignIn}) =>{
  const [currentUser, setcurrentUser] = useState(false)
  //console.log("Current User", currentUser)
  //console.log(signIn,"sign In")
  
  const createNewAccount = (email,password,random=false) => {
      setsignIn(false)
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("already")
       console.log(userCredential.user)
      })
     .catch((error) => {
       /////
       if (random===true){
         console.log(email,password)
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for ( var i = 0; i < 10; i++ ) {
          result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        email = `${result}@website.com`
        password = "password12345"
       }
       console.log(email,password)
      auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        //let user = userCredential.user;
          })
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert(`Email address already in use.`);
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
      //var errorCode = error.code;
      alert(error.message)
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
      if (signIn){
        return setsignIn(false)
      }
      console.log(auth.currentUser)
      setsignIn(true)
    }

    const setData = () => {
      //console.log(auth.currentUser.uid)
      //let con = auth.currentUser.uid

     // let con = auth.currentUser
      console.log('j')
      setcurrentUser(null)
      auth.signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });

      //console.log(db)
     // return db.collection('users').doc(con).set({
    //    bio:"John"
      //})
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
       
          <i onClick={searchPhotos} className="fas fa-search"></i>
          
          <input type="text" onChange={handleChange} placeholder="Search"/>
        </div>
          <i onClick={setData} className="fas fa-bell"></i>
          <i className="fas fa-comment-dots"></i>
          
            <i onClick={displaySignIn} className={`fas fa-circle ${currentUser ? 'green' : 'grey'}`}></i>
         
          <Link  to={currentUser ? '/UserPage' : '#'} style={{ color: "grey" }} >
          <i className="fas fa-sort-down"></i>
          </Link>
        
          
          {signIn ? <Input createNewAccount={createNewAccount} signInExistingAccount={signInExistingAccount}/>

           : ''}
      </div>
    )
}
export default Header