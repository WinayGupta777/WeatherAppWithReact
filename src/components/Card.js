import React from "react";

import Header from "./header";
import Middle from "./middle";
import Footer from "./footer";
import styles from './card.css';

class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cardlayout">
                <Header  place="Dubai" time="19:52"></Header>
                <Middle  img="cloudy"></Middle>
                <Footer  wind="2" humi="23"></Footer>
            </div>
        )
    }
}

export default Card;