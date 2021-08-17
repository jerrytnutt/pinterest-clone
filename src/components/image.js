import {Link} from 'react-router-dom'

const Image = ({item}) =>{
   let newUrl = item.user.portfolio_url
   let linkPage = item.user.portfolio_url
   //console.log(newUrl,linkPage)
   
  
   if (newUrl !== null){
    if (newUrl.match(/https?:\/\//)){
     newUrl = newUrl.replace(/https?:\/\//, "")
   }
     //console.log("other",newUrl,linkPage)
   }else{
    newUrl = item.user.instagram_username
    linkPage = `https://www.instagram.com/${item.user.instagram_username}`
    //console.log("insta",newUrl,linkPage)
   }
   const itemId = item.id
   const newTo = { 
        pathname: `/shop/${itemId}`, 
        state: item,
        newUrl: newUrl,
        linkPage: linkPage
      };
    return(
      <div className="card">
        <div className="shell">
          <div className="popup-background"></div>
            <Link  to={newTo} >
              <div className="saveButton"><button>Save</button></div>
            </Link>
            <img src={item.urls.small} alt=""></img>
            <div className="buttonBox">
            {newUrl ? <button onClick={() => {window.open(linkPage)}} className="one">{newUrl}</button>
           : ""}
              <button className="two"><i className="fas fa-upload"></i></button>
              <button className="two"><i className="fas fa-ellipsis-h"></i></button>
            </div>
        </div>
       </div>
    )
}
export default Image