import auth  from "./firebase";

const userPage = () =>{
  let con = auth.currentUser
  console.log(con)
             
     return(
     <div className="userPage">
       <h2>h</h2>
     </div>
               )
           }
           export default userPage