import {Link} from 'react-router-dom'
const Image = ({item}) =>{
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
            <div className="buttonBox"><button className="one">One</button><button>Two</button><button>Three</button></div>
            
            </div>




       </div>
       
    )
}
export default Image