import React from "react";
import Images from "./accessImages";
class Middle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="svg">
                <img src={Images.cloudy}></img>
                <span className="condition">Sunny</span>
            </div>
        )
    }
}
export default Middle;