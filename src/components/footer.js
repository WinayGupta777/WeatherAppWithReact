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
                    <span className="wind"><img className="wind" src={Images.wind_symbol}></img>{this.props.wind} km/h</span>
                    <span className="humidity"><img className="wind" src={Images.humidity_symbol}></img>{this.props.humi}%</span>
                </div>
                <div className="temp">{this.props.temp}°</div>
            </div>
        )
    }
}

export default Footer;