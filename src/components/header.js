import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <span className="place">{this.props.place}</span>
                <span className="time">{this.props.time}</span>
            </div>
        )
    }
}

export default Header;