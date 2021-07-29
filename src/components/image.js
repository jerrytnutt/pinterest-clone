
const Image = ({item,index}) =>{
    console.log(item.urls.full)
    return(
        
       <div className="card">
           <div className="shell">
            <div className="popup-background"></div>
            <img src={item.urls.small} alt=""></img>
            <div className="buttonBox"><button>One</button><button>Two</button><button>Three</button></div>
            
            </div>




       </div>
       
    )
}
export default Image