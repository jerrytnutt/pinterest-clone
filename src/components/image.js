import {Link} from 'react-router-dom'

const Image = ({item}) =>{
   let linkPage = item.user.portfolio_url
   console.log(linkPage)
   let url = item.user.portfolio_url
   let newUrl;
   console.log(item)
   if (url !== null){
     if (url.match(/https?:\/\//)){
       newUrl = url.replace(/https?:\/\//, "")
     }
    // url = url.replace("https://", "")
     //url = url.replace("www", "")
   }else{
    newUrl = item.user.instagram_username
    linkPage = `https://www.instagram.com/${item.user.instagram_username}`
    
   }
   const itemId = item.id
   const newTo = { 
        pathname: `/shop/${itemId}`, 
        state: item
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
              <button onClick={() => {window.open(linkPage)}} className="one">{newUrl}</button>
              <button className="two"><i class="fas fa-upload"></i></button>
              <button className="two"><i class="fas fa-ellipsis-h"></i></button>
            </div>
        </div>
       </div>
    )
}
export default Image