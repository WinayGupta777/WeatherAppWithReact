import React from "react";
import axios from "axios";
import Header from "./header";
import Middle from "./middle";
import Footer from "./footer";
import styles from './card.css';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time:""
        }
    }
    componentDidMount=()=>{
        setInterval(() => {
            this.getTime();
        }, 1000);
    }
    getTime=()=>{
        axios.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        .then((result)=>{
            const t = result.data.datetime;
            //console.log(t.split('T')[1].substr(0,5))
            this.setState({time:t.split('T')[1].substr(0,5)})
        })
    }
    render(){
        return(
            <div className="cardlayout">
                <Header  place="Dubai" time={this.state.time}></Header>
                <Middle  img="Cloudy"></Middle>
                <Footer  wind="2" humi="23" temp="32"></Footer>
            </div>
        )
    }
}

export default Card;