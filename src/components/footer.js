import React from "react";
import Images from "./accessImages";


class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="more">
                <div className="two">
                    <span className="wind"><img className="wind" src={Images.wind_symbol}></img>1 m/s</span>
                    <span className="humidity"><img className="wind" src={Images.humidity_symbol}></img>36%</span>
                </div>
                <div className="temp">32°</div>
            </div>
        )
    }
}

export default Footer;