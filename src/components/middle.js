import React from "react";

class Middle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="svg">
                <img src="https://cdn-icons.flaticon.com/png/512/3222/premium/3222807.png?token=exp=1640771541~hmac=6d09cb047c9e6f51a9897bc6655aef1c"></img>
                <span className="condition">Sunny</span>
            </div>
        )
    }
}

export default Middle;