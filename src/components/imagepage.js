import {useLocation} from "react-router-dom";
const ImagePage = () =>{
    let data = useLocation();
    console.log(data);
  
    return(
        <div className="ImagePage">
            <div className="doubleView">
                <div className="imageLeft">
                    
                <div className="shell">
                <img src={data.state.urls.small} alt=""></img>
               </div>



                </div>
                <div className="imageDetails">

                    <h2>{data.state.user.portfolio_url}</h2>
                    <h2>{data.state.alt_description}</h2>
                    <div className="profileDetails">
                        <div className="blockOne">
                        <img src={data.state.user.profile_image.small} alt=""></img>
                      </div>
                      <div className="blockTwo">
                        <img src={data.state.user.profile_image.small} alt=""></img>
                      </div>


                    </div>



                </div>



            </div>
           
        </div>
    )
}
export default ImagePage