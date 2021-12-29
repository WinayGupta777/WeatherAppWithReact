import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="more">
                <div className="two">
                    <span className="wind">1 m/s</span>
                    <span className="humidity">36%</span>
                </div>
                <div className="temp">32°</div>
            </div>
        )
    }
}

export default Footer;