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
                <Header></Header>
                <Middle></Middle>
                <Footer></Footer>
            </div>
        )
    }
}

export default Card;