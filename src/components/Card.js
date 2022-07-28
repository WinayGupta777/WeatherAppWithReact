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
            time:"",
            temprature:"",
            humidity:"",
            description:"",
            windflow:""
        }
    }
    componentDidMount=()=>{
        setInterval(() => {
            this.getTime();
        }, 1000);
        setInterval(() => {
            this.getWeather();
        }, 10000);
    }
    getTime=()=>{
        axios.get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        .then((result)=>{
            const t = result.data.datetime;
            //console.log(t.split('T')[1].substr(0,5))
            this.setState({time:t.split('T')[1].substr(0,5)})
        })
    }
    getWeather=()=>{
        const city=this.props.place;
        //const key="6c23166de5ccdd6ac3e247f428e48e91";
        const key = process.env.REACT_APP_KEYNAME;
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key)
        .then((result)=>{
            let tmptr = result.data.main.temp;
            const hmdt = result.data.main.humidity;
            const desc = result.data.weather[0].main;
            const wind = result.data.wind.speed;
            tmptr = Math.round(tmptr-273.15);
            this.setState({
                temprature:tmptr,
                humidity: hmdt,
                description:desc,
                windflow:wind
            })
        })
    }
    render(){
        return(
        <div className="cardlayout">
                <Header  place={this.props.place} time={this.state.time}></Header>
                <Middle  img={this.state.description}></Middle>
                <Footer  wind={this.state.windflow} humi={this.state.humidity} temp={this.state.temprature}></Footer>
            </div>
        )
    }
}

export default Card;