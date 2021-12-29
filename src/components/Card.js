import React from "react";
import styles from './card.css';

class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cardlayout">
                <div className="header">
                    <span className="place">Mumbai</span>
                    <span className="time">19:50</span>
                </div>
                <div className="svg"></div>
                <div className="more">
                    <div className="two">
                        <span className="wind">1 m/s</span>
                        <span className="humidity">36%</span>
                    </div>
                    <div className="temp">32°</div>
                </div>
            </div>
        )
    }
}

export default Card;