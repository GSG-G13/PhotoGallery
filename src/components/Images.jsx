import React,{Component} from "react";
import Card from "./Card";
import imageSearch from '../utils/fetcher.js';
import './images.css';
class Images extends Component{
    state={
        data:null
    }
    setData =(newData)=>{
        this.setState({data:newData })
    }
    componentDidMount(){
        const {type, query}= this.props;
        imageSearch(query, type).then(res=>{
            this.setData(res.hits);
        });
    }
    componentDidUpdate(prevProps) {
        const {type, query} = this.props;
        if (prevProps.type !== type && prevProps.query !== query) {
            imageSearch(query, type).then(res=>{
                this.setData(res);
            });
        }
      }
    render(){
        console.log(this.state.data);
        const {data} = this.state;
        if (!data) return <div>Loading...</div>;
        const cards = data.map((card) =><Card data = {card} key={card.id}/>);
        return(
            <div className="gallery">
                {cards}
            </div>
        );
    }
}
export default Images;