import auth  from "./firebase";

const userPage = () =>{
  let con = auth.currentUser
  let au = con.bc.email
             
     return(
     <div className="userPage">
       <h2>{au}</h2>
     </div>
               )
           }
           export default userPage