
const Header = ({setimageArray}) =>{
    

    const searchPhoto = async () => {
      const res = await fetch('https://api.unsplash.com/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=car&per_page=20')
      const json = await res.json()
      console.log(json)
      setimageArray(json)
        
    }
    const handleChange =  (e) => {
       //setsearch(e.target.value)
            
      }
    return(
        <div className="header">
            <i className="fab fa-pinterest-square"></i>
            <button>Home</button>
            <button>Today</button>
            <div className="input-wrapper">
            <i onClick={searchPhoto} className="fas fa-search"></i>
     <input type="text" onChange={handleChange} placeholder="Search"/>
 </div>
            <i className="fas fa-bell"></i>
            <i className="fas fa-comment-dots"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-sort-down"></i>


        </div>
    )
}
export default Header