
const Gallery = ({imageArray}) =>{
    
    return(
        <div className="gallery">
           {imageArray.map((item, index) => (<li key={index}>{item.alt_description}</li>)) }
        </div>
    )
}
export default Gallery