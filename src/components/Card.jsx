import React,{Component} from "react";

class Card extends Component{
    
    render(){
        const {id,pageURL,largeImageURL,likes,views,downloads,user,tags } = this.props.data;
        return(
            <div className="gallery-item">
                <div className="gallery-image">
                    <img src={largeImageURL} alt ={id}/>
                </div>
                <a href={pageURL}><div className="gallery-description">
                    {/* <p className="text-title"> Card Title</p> */}
                    <div className="text-body">
                       <span><i className="ri-heart-line"></i> {likes}</span> 
                       <span><i className="ri-eye-line"></i> {views}</span> 
                       <span><i className="ri-download-2-line"></i> {downloads}</span> 
                       <span><i className="ri-user-3-line"></i> {user}</span> 
                       <span><i className="ri-hashtag"></i> {tags}</span> 
                    </div>
                </div></a>
                
            </div>
        );
    }
}

export default Card;