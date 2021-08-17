import {useState} from "react"

const Input = ({createNewAccount,signInExistingAccount}) =>{
  const [currentEmail, setcurrentEmail] = useState()
  const [currentPassword, setcurrentPassword] = useState()

  const emailChange =  (e) => {
    e.preventDefault()
    setcurrentEmail(e.target.value)
    }
    const passwordChange =  (e) => {
      e.preventDefault()
      setcurrentPassword(e.target.value)
      }

    const sendCred = ()=> {
      console.log(currentEmail,currentPassword)
      return createNewAccount(currentEmail,currentPassword,true)
    }
    const signIn = ()=> {
      console.log(currentEmail,currentPassword)
      return signInExistingAccount(currentEmail,currentPassword)
    }

    return(
      <div className="input">
        
        <div className="signInScreen">
              <h5>Create New Account</h5>
              <input type='text' onChange={emailChange} placeholder="Email"></input>
              <input type='text' onChange={passwordChange} placeholder="Password"></input>
              <input type='text' placeholder="Confirm Password"></input>
              <button className="continue" onClick={sendCred}>Continue</button>
              <p>Or</p>
              <h5>Sign In</h5>
              <input type='text' onChange={emailChange} placeholder="Email"></input>
              <input type='text' onChange={passwordChange} placeholder="Password"></input>
              <button className="continue" onClick={signIn}>Continue</button>
              <p>Or</p>
              <h5>Use Demo Account</h5>
              <button className="continue">Use Demo Account</button>
              </div>
      </div>
    )
}
export default Input