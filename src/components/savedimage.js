const Savedimage = ({item}) =>{
   
    return(
      <div className="card">
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="shell">
        <div className="popup-background"></div>
        <img src={item} alt=""></img>
            </div>
        </div>
    )
}
export default Savedimage