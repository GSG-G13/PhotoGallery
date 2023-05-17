import React,{Component} from "react";
import './loading.css';
class Loading extends Component{
render(){
    return (
        <section className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      );
}
}
export default Loading;