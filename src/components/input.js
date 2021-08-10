import {useState} from "react"

const Input = ({createNewAccount}) =>{
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
      return createNewAccount(currentEmail,currentPassword)

    }

    return(
      <div className="input">
        
        <div className="signInScreen">
              <input type='text' onChange={emailChange} placeholder="Email"></input>
              <input type='text' onChange={passwordChange} placeholder="Password"></input>
              <input type='text' placeholder="Confirm Password"></input>
              <button className="continue" onClick={sendCred}>Continue</button>
              <p>Or</p>
              <button className="continue">Use Demo Account</button>
              </div>
      </div>
    )
}
export default Input