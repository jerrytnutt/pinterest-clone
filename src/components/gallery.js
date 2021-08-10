import Image from "./image";

const Gallery = ({imageArray}) =>{
  //console.log(imageArray)
 // let endPoint = 20

  //console.log(imageArray.slice(0,endPoint))
    return(
      <div className="gallery">
        <div className="imageContainer">
          {imageArray.map((item, index) => (
            <Image key={index} item={item}/>
           )) }
        </div>
       </div>
    )
}
export default Gallery