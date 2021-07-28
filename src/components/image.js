
const Image = ({item,index}) =>{
    console.log(item.urls.full)
    return(
       <div className="card">
            <img src={item.urls.small} alt=""></img>




       </div>
    )
}
export default Image